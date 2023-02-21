import React from "react";

export default function Lives({ livesLeft }) {
  var x = [];
  for (var i = 1; i <= livesLeft; i++) {
    x.push(i);
  }
  return (
    <div className="lives">
      <div className="hangman-container">
        <div className="pole"></div>
        <div className={`hangman hangman-${6 - livesLeft}`}>
          <div className="hangman__element "></div>
          <div className="hangman__element  "></div>
          <div className="hangman__element "></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
        </div>
      </div>
      <div className="lives-left">
        {x.map((i) => {
          return <div className="heart">❤</div>;
        })}
      </div>
    </div>
  );
}
