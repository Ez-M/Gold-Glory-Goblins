import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Scoreboard() {
    const {gold, score, currentView, damage, setGold, setScore,setCurrentView, setDamage} = useContext(GSCV) //importing context from GSCV

    return(   
         <div>gold: {gold}  score: {score} currentView: {currentView} Damage: {damage}</div>
          )

}

export default Scoreboard;