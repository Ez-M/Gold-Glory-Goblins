import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Grind() {

    const {gold, score, currentView, setGold, setScore} = useContext(GSCV) //importing context from GSCV

  //testClick function to increase gold and score when clicked, simulating
  //resource gain during gameplay
    function testClick(){
        setGold(gold + 1)
        setScore(score + 1)
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