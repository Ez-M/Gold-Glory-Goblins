import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Grind() {

    const {gold, score, currentView, damage, setGold, setScore,setCurrentView, setDamage} = useContext(GSCV) //importing context from GSCV

  //testClick function to increase gold and score when clicked, simulating
  //resource gain during gameplay
    function testClick(){
        setGold(gold + damage)
        setScore(score + damage)
        console.log(`gold: ${gold}`)
        console.log(`score: ${score}`)
      }
    
    return(
    <div>
    Punch that goblin!
    <button onClick={testClick}>{gold}</button>
    </div>
    )
}

export default Grind;