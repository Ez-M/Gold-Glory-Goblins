import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

import Grind from "./grind";
import Spend from "./spend";
import Scoreboard from "./scoreboard";
import Home from "./home";

function RenderSwitcher() {

  const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana} = useContext(GSCV) //importing context from GSCV

  //testClick function to increase gold and score when clicked, simulating
  //resource gain during gameplay

  function renderSwitch(q) {
    
    switch(q) {
      case 'Home':  return  <Home />;
      case 'Store': return  <Spend />;
      case 'Grind': return  <Grind />;
        default:    return  <Home />;

    }
  }  


    return(
       renderSwitch(currentView) 
    )
}

export default RenderSwitcher;