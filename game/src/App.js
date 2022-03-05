import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

import Grind from "./components/grind";
import Scoreboard from "./components/scoreboard";

function App() {


  //This is me doing the same thing as above but using states because I think I need to
  // in order to get things to dynamically render/update
const [gold2, setGold2] = useState(0); //Player's current gold
const [score2, setScore2] = useState(0); //Player's total gold ever earned (plus achivements?)
const [currentView2, setCurrentView2] = useState(""); //variable to tell the game what tab to render


  //testClick function to increase gold and score when clicked, simulating
  //resource gain during gameplay
  function testClick(){
    setGold2(gold2 + 1)
    setScore2(score2 + 1)
    console.log(`gold: ${gold2}`)
    console.log(`score: ${score2}`)
  }

  return (
  <div className="App">
    Hello Adventurer!
    <br/>
    <Grind gold2 = {gold2} score2={score2} currentView2={currentView2}/>
    <br/>
    <Scoreboard gold2 = {gold2} score2={score2} currentView2={currentView2}/>
  </div>
  );
}

export default App;
