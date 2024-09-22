import React from "react";
import { useTabs } from "../hooks/useTabs";

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

const TabsComponent = () => {
  const { currentItem, changeItem } = useTabs(0, hobbies);

  return (
    <div>
      <h1>Introduce my hobby</h1>
      <input type="text" placeholder="Search for a hobby" />
      <div>
        {hobbies.map((hobby, index) => (
          <button
            key={index}
            onClick={() => changeItem(index)}
            className={currentItem.name === hobby.name ? "active" : ""}
          >
            {hobby.name}
          </button>
        ))}
      </div>
      <div className="content-box">
        <p>{currentItem.description}</p>
      </div>
    </div>
  );
};

export default TabsComponent;
