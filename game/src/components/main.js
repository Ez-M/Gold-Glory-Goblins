import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

import Grind from "./grind";
import Spend from "./spend";
import Scoreboard from "./scoreboard";
import Home from "./home";

import GSCVProvider from "../contexts/GSCV";
import { render } from "react-dom";


function Main() {

  const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana} = useContext(GSCV) //importing context from GSCV
  let compono = null;

  // I need a switchcase that will render in between Grind and Scoreboard that will determine *where* we render, i.e. home, the store, the wilderness, etc. 
  function renderSwitch(q) {
    
    switch(q) {
      case 'Home':   return <Home />;
      case 'Store':  return <Spend />;
        default:     return <Home />;

    }
  }

  function navStore() {
    console.log(currentView)
    setCurrentView("Store")
    console.log(currentView);
    renderSwitch();
}

  

    return(   

        <GSCVProvider>
        Hello Adventurer! <button onClick={navStore}> Go to the store!</button>
        <br/>
        <Grind />
        <br/>
        
       { renderSwitch(currentView) }
        <br/>
        <Scoreboard />
    
    
        </GSCVProvider>

          )

}

export default Main;