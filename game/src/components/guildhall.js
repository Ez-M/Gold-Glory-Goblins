import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Grind() {

  const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana} = useContext(GSCV) //importing context from GSCV


    function testClick(){}
    
    return(
    <div>
    Select a bounty brave adventurer
    <button onClick={testClick}>{gold}</button>
    </div>
    )
}

export default Grind;