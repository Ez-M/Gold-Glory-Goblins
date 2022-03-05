import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

import Grind from "./grind";
import Spend from "./spend";
import Scoreboard from "./scoreboard";
import Home from "./home";

import GSCVProvider from "../contexts/GSCV";


function Main() {

  const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana} = useContext(GSCV) //importing context from GSCV
    

  // I need a switchcase that will render in between Grind and Scoreboard that will determine *where* we render, i.e. home, the store, the wilderness, etc. 

  function renderSwitch(currentView) {
    switch(currentView) {
      case 'Home':
        return <Home />;
      case 'store':
        return <Spend />;
        default:
          return <Home />;

    }
  }
    return(   

        <GSCVProvider>
        Hello Adventurer!
        <br/>
        <Grind />
        <br/>
        {renderSwitch(currentView)}
        <br/>
        <Scoreboard />
    
    
        </GSCVProvider>

          )

}

export default Main;