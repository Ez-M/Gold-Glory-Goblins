import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {

  var gold = 0;
  var score = 0;
  var currentView = "";

  return (<div className="App">
    Hello World!
    <button>{gold}</button>
  </div>
  );
}

export default App;
