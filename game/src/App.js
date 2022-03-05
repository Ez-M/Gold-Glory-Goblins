import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {

  var gold = 0; //Player's current gold
  var score = 0; //Player's total gold ever earned (plus achivements?)
  var currentView = ""; //variable to tell the game what tab to render


  //This is me doing the same thing as above but using states because I think I need to
  // in order to get things to dynamically render/update
const [gold2, setGold2] = useState(0);
const [score2, setScore2] = useState(0);
const [currentView2, setCurrentView2] = useState("");


  //testClick function to increase gold and score when clicked, simulating
  //resource gain during gameplay
  // PROBLEM: currently not updating the onscreen render
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
    Punch that goblin!
    <button onClick={testClick}>{gold2}</button>
    <br/>
    <p>gold: {gold2}  score: {score2} currentView: {currentView2}</p> 
  </div>
  );
}

export default App;
