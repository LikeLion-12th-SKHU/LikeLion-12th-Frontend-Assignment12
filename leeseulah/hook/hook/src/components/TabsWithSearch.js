import React, { useState } from "react";
import { useTabs } from "../hooks/useTabs";
import useDebounce from "../hooks/useDebounce";
import FadeInContent from "./FadeInContent";

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

const TabsWithSearch = () => {
  const { currentItem, changeItem } = useTabs(0, hobbies);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms 딜레이
  const filteredHobbies = hobbies.filter((hobby) =>
    hobby.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a hobby"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredHobbies.length > 0 ? (
          filteredHobbies.map((hobby, index) => (
            <button key={index} onClick={() => changeItem(index)}>
              {hobby.name}
            </button>
          ))
        ) : (
          <p>No result</p>
        )}
      </div>
      <div>
        {filteredHobbies.length > 0 && (
          <FadeInContent description={currentItem.description} />
        )}
      </div>
    </div>
  );
};

export default TabsWithSearch;
