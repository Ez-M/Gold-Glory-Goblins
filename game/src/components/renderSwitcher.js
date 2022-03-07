import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

import Grind from "./grind";
import Spend from "./spend";
import Scoreboard from "./scoreboard";
import Home from "./home";
import Jobs from "./jobs";
import WIP404 from "./WIP";
import MagicStore from "./magicStore";


function RenderSwitcher() {

  const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana, magicSkill, setMagicSkill, magXP, setMagXP,} = useContext(GSCV) //importing context from GSCV

  //testClick function to increase gold and score when clicked, simulating
  //resource gain during gameplay

  function renderSwitch(q) {
    
    switch(q) {
      case 'Home':  return  <Home />;    //initial home screen, might use for a rest button
      case 'Store': return  <Spend />;   //opens bog bob's store
      case 'Grind': return  <Grind />;   // the kill things placeholder
      case 'Jobs': return <Jobs />;      // opens the jobs page (get gold)
      case 'MagicStore': return <MagicStore />;
      
        default:    return  <WIP404 />; //not really a 404 lmao

    }
  }  


    return(
       renderSwitch(currentView) 
    )
}

export default RenderSwitcher;