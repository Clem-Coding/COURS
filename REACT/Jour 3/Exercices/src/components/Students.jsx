import React from "react";

function Student(props) {
  const average =
    props.notes.reduce((sum, note) => sum + note, 0) / props.notes.length;

  return (
    <div>
      <h2>{props.name}</h2>
      <p>Moyenne: {average.toFixed(2)}</p>
    </div>
  );
}

export default Student;
