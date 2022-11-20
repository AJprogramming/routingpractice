import React from "react";
import { useParams } from "react-router-dom";

const Input = (props) => {
  const { input, color, background } = useParams();

  return (
    <div>
      {isNaN(input) ? (
        <h2
          style={color ? { color: color, backgroundColor: background } : null}
        >
          The word is: {input}
        </h2>
      ) : (
        <h2>The number is: {input}</h2>
      )}
    </div>
  );
};

export default Input;
