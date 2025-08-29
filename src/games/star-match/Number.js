import React from "react";

export const Number = (props) => (
  <button key={props.number} className="number">
    {props.number}
  </button>
);
