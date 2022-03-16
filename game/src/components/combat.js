import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

import CombatButtons from "./combatButtons";
import CombatFeed from "./combatFeed";
import CombatBoard from "./combatBoard";
import CombatProvider from "../contexts/combatStuff"



function Combat() {
  const [testVal, setTestVal] = useState(0);
  

  const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana, magicSkill, setMagicSkill, magXP, setMagXP,} = useContext(GSCV) //importing context from GSCV


  // player character combat token, used to represent the player's states loaded into a local variable to facilitate glorious battle!!
  const PCCT = {
    gold: gold,
    score: score,
    currentView: currentView,
    damage: damage,
    health: health,
    maxHealth: maxHealth,
    stamina: stamina,
    maxStamina: maxStamina,
    mana: mana,
    maxMana: maxMana,
    strength: strength,
    dexterity: dexterity,
    intelligence: intelligence,
    fortitude: fortitude,
    meleeSkill: meleeSkill,
    rangedSkill: rangedSkill,
    magicSkill: magicSkill
  }
    const style = {
    color: `red`
  }
  var currentEnemies = []
    
    return(
      
      <div>
        <CombatProvider>
    <CombatFeed
      // dynamic = {dynamic}
    /> 
    <br/>
    <CombatButtons
    PCCT = {PCCT}
    // dynamic = {dynamic}
    // setDynamic= {setDynamic}
    />
    <br/> 
    <CombatBoard
      PCCT = {PCCT}
    />
     <button onClick={()=> {PCCT.health-=1; console.log(PCCT.health)}}>Button home</button>
     </CombatProvider>
    </div>

    )
}

export default Combat;