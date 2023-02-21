import React from "react";
// import ".../styles/main.scss";

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"];

export default function Letters({ playedLetters, onSelect, session, newWord }) {
  const played_set = new Set(playedLetters);
  if (session.result === true) {
    setTimeout(() => {
      newWord();
    }, 1000);
  }
  return (
    <div className="display-flex justify-content-center">
      {ALL_ALPHABETS.map((alphabet) => (
        <button
          className="start-button letter-button"
          onClick={() => onSelect(alphabet)}
          disabled={played_set.has(alphabet)}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
