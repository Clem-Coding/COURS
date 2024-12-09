import React, { useState, useEffect } from "react";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img
        src={`/images/${images[currentImageIndex]}`}
        alt="chat bizarre"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
}
