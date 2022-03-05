import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Scoreboard() {
    const {gold2, score2, currentView2} = useContext(GSCV)

    return(   
         <div>gold: {gold2}  score: {score2} currentView: {currentView2}</div>
          )

}

export default Scoreboard;