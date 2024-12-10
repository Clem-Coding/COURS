import React from "react";
import { useNavigate } from "react-router-dom";
import Counter from "../components/Counter";
import DiaporamaWithButtons from "../components/DiaporamaWithButtons";
import HomeButton from "../components/HomeButton";

export default function Jour3() {
  const navigate = useNavigate();
  return (
    <div>
      <HomeButton />
      <h1>Exercice 1</h1>
      <Counter />
      <h1>Exercice 2</h1>
      <DiaporamaWithButtons />
      <h1>Exercice 3</h1>
      <button onClick={() => navigate("/exercice-form")}>
        Exercice sur les Formulaires
      </button>
    </div>
  );
}
