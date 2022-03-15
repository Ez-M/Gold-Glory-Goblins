import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";
import { CombatStuff } from "../contexts/combatStuff";



function CombatFeed() {
  const [testVal, setTestVal] = useState(0);


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
    <CombatFeed/> 
    <br/>
    <CombatButtons/>
    <br/> 
    <CombatBoard/>
    </div>

    )
}

export default CombatFeed;