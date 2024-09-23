import React from "react";
import { useTabs } from "../hooks/useTabs";

const hobbies = [
  {
    title: "Reading",
    content: "Reading is a great way to expand your knowledge.",
  },
  { title: "Gaming", content: "Gaming can be a fun way to relieve stress." },
  { title: "Cooking", content: "Cooking is a practical and enjoyable skill." },
];

function HobbyTabs() {
  const { currentItem, changeItem } = useTabs(0, hobbies);

  return (
    <div>
      <div>
        {hobbies.map((hobby, index) => (
          <button key={hobby.title} onClick={() => changeItem(index)}>
            {hobby.title}
          </button>
        ))}
      </div>
      <div>
        <h2>{currentItem.title}</h2>
        <p>{currentItem.content}</p>
      </div>
    </div>
  );
}

export default HobbyTabs;
