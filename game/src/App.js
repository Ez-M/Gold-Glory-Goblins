import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"; 

import Grind from "./components/grind";
import Scoreboard from "./components/scoreboard";
import GSCVProvider from "./contexts/GSCV";
import Spend from "./components/spend";


function App() {

  return (
    
  <div className="App">
    <GSCVProvider>
    Hello Adventurer!
    <br/>
    <Grind />
    <br/>
    <Spend />
    <br/>
    <Scoreboard />


    </GSCVProvider>
  </div>
  );
}

export default App;
