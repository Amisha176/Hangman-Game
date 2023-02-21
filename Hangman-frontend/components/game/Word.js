import React from "react";

export default function Word({ maskedWord, newWord, session }) {
  console.log(maskedWord.length);
  return (
    <div className="guessWord">
      {maskedWord.map((letter) => (
        <div className="guessLetter">
          <span>&nbsp;{letter}&nbsp;</span>
        </div>
      ))}
    </div>
  );
}
