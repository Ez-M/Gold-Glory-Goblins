import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Grind() {

    const {gold2, score2, currentView2} = useContext(GSCV)


    function testClick(){
        // setGold2(gold2 + 1)
        // setScore2(score2 + 1)
        console.log(`gold: ${gold2}`)
        console.log(`score: ${score2}`)
      }
    
    return(
    <div>
    Punch that goblin!
    <button onClick={testClick}>{gold2}</button>
    </div>
    )
}

export default Grind;