import React from "react";

export default function Number(props) {
  const numbersToPowerThree = Math.pow(props.number, 3);
  return (
    <div>
      <p>
        Le nombre {props.number}, à la puissance 3 : {numbersToPowerThree}
      </p>
    </div>
  );
}
