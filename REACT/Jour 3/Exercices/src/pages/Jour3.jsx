import React from "react";
import { useNavigate } from "react-router-dom";
import Counter from "../components/Counter";

export default function Jour3() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Exercice 1</h1>
      <Counter />
    </div>
  );
}
