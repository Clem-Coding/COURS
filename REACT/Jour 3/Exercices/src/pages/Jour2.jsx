import React from "react";
import { useNavigate } from "react-router-dom";
import Number from "../components/Number";
import Students from "../components/Students";
import Messages from "../components/Messages";
import Fruits from "../components/Fruits";
import Clock from "../components/Clock";
import Diaporama from "../components/Diaporama";

export default function Jour2() {
  const navigate = useNavigate();
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
      <button onClick={() => navigate("/")}>Home</button>
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
