import React from "react";
import Lives from "./Lives";
import Letters from "./Letters";
import Start from "./Start";
import Word from "./Word";

export default function ({
  isRunning,
  session,
  played_set,
  guess,
  start,
  newWord,
  // isWon,
}) {
  return (
    <>
      <div className="game-wrapper">
        {isRunning && (
          <>
            <div className="left-pane">
              <Lives livesLeft={session.livesLeft} />
            </div>
            <div className="right-pane">
              <Word
                maskedWord={session.maskedWord}
                newWord={newWord}
                session={session}
              />
              <Letters
                playedLetters={played_set}
                onSelect={guess}
                session={session}
                newWord={newWord}
              />
            </div>
          </>
        )}
        {!isRunning && (
          <>
            <Start onStart={start} />
          </>
        )}
      </div>
    </>
  );
}
