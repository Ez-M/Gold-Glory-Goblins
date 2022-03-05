import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {

  var gold = 45; //Player's current gold
  var score = 0; //Player's total gold ever earned (plus achivements?)
  var currentView = ""; //variable to tell the game what tab to render

  return (<div className="App">
    Hello Adventurer!
    <button>{gold}</button>
    <br/>
    <p>gold: {gold}  score: {score} currentView: {currentView}</p>
  </div>
  );
}

export default App;
