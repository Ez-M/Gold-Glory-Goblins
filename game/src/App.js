import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

import Grind from "./components/grind";
import Scoreboard from "./components/scoreboard";
import GSCVProvider from "./contexts/GSCV";

function App() {





  //testClick function to increase gold and score when clicked, simulating
  //resource gain during gameplay


  return (
    
  <div className="App">
    <GSCVProvider>
    Hello Adventurer!
    <br/>
    <Grind />
    <br/>
    <Scoreboard />
    </GSCVProvider>
  </div>
  );
}

export default App;
