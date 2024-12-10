import React, { useState } from "react";

const images = [
  "cat1.jpg",
  "cat2.jpg",
  "cat3.jpg",
  "cat4.jpg",
  "cat5.jpg",
  "cat6.jpg",
  "cat7.jpg",
];

export default function Diaporama() {
  const [index, setIndex] = useState(0);

  const onNext = () => {
    // Si on atteint la fin du tableau, on revient au début
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onPrevious = () => {
    // Si on est au début, on va à la fin du tableau
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="diaporama">
      <div className="diaporama-container">
        <button onClick={onPrevious}>&lt;</button>
        <img
          src={`/images/${images[index]}`}
          alt={`chat ${index + 1}`}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <button onClick={onNext}>&gt;</button>
      </div>
    </div>
  );
}
