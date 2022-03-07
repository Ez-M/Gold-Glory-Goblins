import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Grind() {

  const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana, magicSkill, setMagicSkill, magXP, setMagXP,} = useContext(GSCV) //importing context from GSCV


//combat placeholder page


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