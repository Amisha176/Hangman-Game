import React, { useState } from "react";
import Layout from "./Layout";
import { createSession, playInSession, playNewWord } from "../../api/sessions";

const MAX_LIVES = 6;
export default function Game() {
  const [session, setSession] = useState(null);
  const isRunning = !!session;
  const guess = async (letter) => {
    const updatedSession = await playInSession(session.id, letter);
    setSession(updatedSession);
  };
  const start = async (name) => {
    const session = await createSession(name);
    setSession(session);
  };
  const newWord = async () => {
    const updatedSession = await playNewWord(session.id);
    setSession(updatedSession);
  };
  let played_set = [];
  if (session && session.playedLetters) {
    played_set = session.playedLetters;
  }

  return (
    <Layout
      isRunning={isRunning}
      session={session}
      played_set={played_set}
      guess={guess}
      start={start}
      newWord={newWord}
      // isWon={isWon}
    />
  );
  if (session.result === true) {
    () => {
      setTimeout(() => {
        newWord();
      }, 100);
    };
  }
}
