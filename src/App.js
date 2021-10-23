import logo from './logo.svg';
import './App.css';
import classes from './App.module.scss'
import Note0 from "./components/Note0"
import Note1 from "./components/Note1"
import Note2 from "./components/Note2"
import Note3 from "./components/Note3"
import Note4 from "./components/Note4"
import Note5 from "./components/Note5"
import Note6 from "./components/Note6"
import Note7 from "./components/Note7"
import Note8 from "./components/Note8"
import Note9 from "./components/Note9"
import Notem1 from './components/Notem1';
import Notem2 from './components/Notem2';



// <div>𝄞♩♭♯𝄚</div>

const App = () => (
  <div>
  <div className={classes.fiveLinesStaffWrapper}>
    <span className={classes.fiveLinesStaff}>
      𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚
    </span>
    <span className={classes.gClef}>𝄞</span>
    <Notem2 /><Notem1 /><Note0 /><Note1 /><Note2 /><Note3 /><Note4/><Note5 /><Note6 /><Note7 /> <Note8 /><Note9 />
  </div>

<div className={classes.fiveLinesStaffWrapper}>
<span className={classes.fiveLinesStaff}>
  𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚
</span>
<span className={classes.gClef}>𝄞</span>
  <Notem2 /><Notem2 /><Notem2 /><Notem1 /><Note0 /><Notem1 /><Notem2 /><Note0 /><Notem1 /><Notem1 /><Notem2 />
</div>
</div>
);
export default App;
