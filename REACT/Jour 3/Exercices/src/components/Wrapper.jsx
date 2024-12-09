import React from "react";
import Number from "./Number";
import Students from "./Students";
import Messages from "./Messages";
import Fruits from "./Fruits";
import Clock from "./Clock";
import Diaporama from "./Diaporama";

export default function wrapper() {
  const numbers = [4, 3, 7];
  const studentsList = [
    { notes: [12, 11, 10], name: "Alan" },
    { notes: [18, 10, 19], name: "Alice" },
    { notes: [10, 9, 11], name: "Bernard" },
    { notes: [11, 17, 19], name: "Sophie" },
  ];

  const messagesList = [
    { message: "React JS" },
    { message: "React Native" },
    { message: "Angular" },
    { message: "Symfony" },
    { message: "MongoDB" },
  ];

  const productsList = [
    { prices: [1.2, 1.1, 1.0], name: "apple" },
    { prices: [1.8, 1.0, 1.9], name: "orange" },
    { prices: [1.0, 0.9, 1.1], name: "bananas" },
  ];

  const images = [
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg",
    "cat4.jpg",
    "cat5.jpg",
    "cat6.jpg",
    "cat7.jpg",
  ];

  return (
    <div>
      <h1>Exercice 1 - Puissance 3</h1>
      {numbers.map((number, index) => (
        <Number key={index} number={number} />
      ))}
      <h1>Exerice 2 - Students</h1>
      {studentsList.map((student, index) => (
        <Students key={index} name={student.name} notes={student.notes} />
      ))}
      <h1>Exercice 3 -Messages</h1>
      {messagesList.map((item, index) => (
        <Messages key={index} message={item} />
      ))}
      <h1>Exercice 4 - Fruits</h1>
      {productsList.map((product, index) => (
        <Fruits key={index} name={product.name} prices={product.prices} />
      ))}

      <h1>Exercice 5 - Holorge</h1>
      <Clock />
      <h1>Exercice 6 - Le Diaporama</h1>
      <Diaporama />
    </div>
  );
}
