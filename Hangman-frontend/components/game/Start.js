import React, { useState } from "react";

export default function Start({ onStart }) {
  const [name, setName] = useState("");
  return (
    // <div className={` ${isRunning && "displayNone"} `}>
    <div className="start-container">
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.name)}
        name={name}
        className="input-box"
      />
      <button className="start-button" onClick={() => onStart(name)}>
        Start
      </button>
    </div>
  );
}
