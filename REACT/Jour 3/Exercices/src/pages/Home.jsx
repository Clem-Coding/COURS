import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Module REACT</h1>
      <div className="buttons-wrapper">
        <button onClick={() => navigate("/jour1")}>Jour 1</button>
        <button onClick={() => navigate("/jour2")}>Jour 2</button>
        <button onClick={() => navigate("/jour3")}>Jour 3</button>
      </div>
    </div>
  );
}
