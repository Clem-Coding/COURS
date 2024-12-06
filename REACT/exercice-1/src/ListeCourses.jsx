import { LoremIpsum } from "lorem-ipsum";
import React, { useState } from "react";

function ListeCourses() {
  const items = ["Des chats", "Des chiens", "Des oiseaux"];
  const lorem = new LoremIpsum();
  const loremText = lorem.generateWords(100);
  const [isGreen, setIsGreen] = useState(false);
  const toggleGreen = () => {
    setIsGreen(!isGreen);
  };
  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <h3 style={{ color: isGreen ? "green" : "black" }}>{item}</h3>
            <p>{loremText}</p>
          </li>
        ))}
      </ul>
      <button onClick={toggleGreen}>Mettre les titres en vert</button>
    </>
  );
}

export default ListeCourses;
