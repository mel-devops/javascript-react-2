import React, { useState } from "react";

export const NumberBuilder = () => {
  let [counter, setCounter] = useState(0);
  let [str, setStr] = useState("");

  const handleNumber = () => {
    setCounter(++counter);
    setStr((str += counter + " "));
  };

  const onReset = () => {
    setCounter(0);
    setStr(" ");
  };

  return (
    <div className="numBuilder">
      <button onClick={() => handleNumber()}>Add Number</button>
      <button onClick={() => onReset()}> Reset</button>
      <p>Numbers:{str}</p>
    </div>
  );
};