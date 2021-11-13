import React, { useState, useEffect } from "react";

import "./App.css";
import classes from "./App.module.scss";
import Note0 from "./components/Note0";
import Note1 from "./components/Note1";
import Note2 from "./components/Note2";
import Note3 from "./components/Note3";
import Note4 from "./components/Note4";
import Note5 from "./components/Note5";
import Note6 from "./components/Note6";
import Note7 from "./components/Note7";
import Note8 from "./components/Note8";
import Note9 from "./components/Note9";
import Notem1 from "./components/Notem1";
import Notem2 from "./components/Notem2";

// <div>𝄞♩♭♯𝄚</div>

const listOfNotes = [
  { component: Notem2, note: 'do' },
  { component: Notem1, note: 'ré' },
  { component: Note0, note: 'mi' },
  { component: Note1, note: 'fa' },
  { component: Note2, note: 'sol' },
  { component: Note3, note: 'fa' },
  { component: Note4, note: 'sol' },
  { component: Note5, note: 'la' },
  { component: Note6, note: 'si' },
  { component: Note7, note: 'do' },
  { component: Note8, note: 'ré' },
  { component: Note9, note: 'mi' },
];

const keysToNotes = {
  q: 'do',
  s: 'ré',
  d: 'mi',
  f: 'fa',
  g: 'sol',
  h: 'la',
  j: 'si',
  k: 'do',
  l: 'ré',
  m: 'mi'
}

const App = () => {
  const [keyPressed, setKeyPressed] = useState("");
  useEffect(() => {
    console.log("Document ok !");
    document.addEventListener("keydown", (e) => {
      setKeyPressed(e.key);
    });
  }, [keyPressed]);

  const number = Math.floor(Math.random() * 12);
  let result;
  if (keysToNotes[keyPressed] === listOfNotes[number].note) {
    result = true;
  } else {
    result = false;
  }
  return (
    <div>
      <div className={classes.fiveLinesStaffWrapper}>
        <span className={classes.fiveLinesStaff}>
          𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚
        </span>
        <span className={classes.gClef}>𝄞</span>
        {listOfNotes[number].component()}
      </div>
      {listOfNotes[number].note}
      <br />
      {keyPressed}
      <br/>
      {keysToNotes[keyPressed]}
      <br />
      { result.toString() }
    </div>
  );
};
export default App;
