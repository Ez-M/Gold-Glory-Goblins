import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Grind() {

    const {gold, score, currentView, setGold, setScore} = useContext(GSCV)


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