import React, { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useFadeIn } from "./hooks/useFadeIn";

const hobbies = [
  {
    name: "K-DRAMA",
    description: "Let's talk about the drama with me",
  },
  {
    name: "K-POP",
    description: "Let's analyze the lyrics with me",
  },
  {
    name: "WALK",
    description: "Let's take a night walk with me",
  },
];

function TabsWithSearch() {
  const [search, setSearch] = useState("");
  const [selectedHobby, setSelectedHobby] = useState(hobbies[0]);
  const debouncedSearch = useDebounce(search, 500);
  const { ref: fadeInRef, triggerFadeIn } = useFadeIn(1);

  useEffect(() => {
    const hobby = hobbies.find((hobby) =>
      hobby.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    if (hobby) {
      setSelectedHobby(hobby);
      triggerFadeIn();
    } else {
      setSelectedHobby(null);
    }
  }, [debouncedSearch]);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #ccc",
      }}
    >
      <input
        type="text"
        placeholder="Search for a hobby"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          height: "30px",
          padding: "5px",
          width: "35%",
          marginBottom: "10px",
        }}
      />
      <div>
        {hobbies.map((hobby, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedHobby(hobby);
              triggerFadeIn();
            }}
            style={{
              margin: "5px",
              padding: "10px",
              borderRadius: "5px",
              background: "#fff",
              border: "1px solid #ccc",
            }}
          >
            {hobby.name}
          </button>
        ))}
      </div>
      <div ref={fadeInRef} className="description" style={{ fontSize: "15px" }}>
        {debouncedSearch && !selectedHobby ? (
          <p>No result</p>
        ) : (
          <p>{selectedHobby?.description}</p>
        )}
      </div>
    </div>
  );
}

export default TabsWithSearch;
