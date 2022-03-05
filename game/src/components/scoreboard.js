import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Scoreboard() {
    const {gold, score, currentView} = useContext(GSCV) //importing context from GSCV

    return(   
         <div>gold: {gold}  score: {score} currentView: {currentView}</div>
          )

}

export default Scoreboard;