import React from "react";

export default function Messages(props) {
  return (
    <div>
      <ul>
        <li>{props.message.message}</li>
      </ul>
    </div>
  );
}
