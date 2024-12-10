import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState(false);

  const increment = () => {
    setCount(count + 1);
    setWarning(false);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>Incrémenter +1</button>
      <button onClick={decrement}>Décrémenter -1</button>

      {warning && (
        <p style={{ color: "red" }}>
          Vous ne pouvez pas décrémenter en dessous de 0.
        </p>
      )}
    </div>
  );
}
