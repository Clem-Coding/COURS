import React from "react";

export default function Fruits(props) {
  const average =
    props.prices.reduce((sum, price) => sum + price, 0) / props.prices.length;
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.prices.map((price, index) => (
          <li key={index}>Prix : {price} €</li>
        ))}
      </ul>
      <p>Moyenne des prix : {average.toFixed(2)} €</p>
    </div>
  );
}
