import logo from './logo.svg';
import './App.css';
import classes from './App.module.scss'
import SheetMusic from "@slnsw/react-sheet-music";

// <div>𝄞♩♭♯𝄚</div>

const App = () => (
  <div className={classes.fiveLinesStaffWrapper}>
    <span className={classes.fiveLinesStaff}>
      𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚
    </span>
    <span className={classes.gClef}>𝄞</span>
    <span className={classes.note}>♩</span>
  </div>
);
export default App;
