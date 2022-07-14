import React, {useState, useContext, useEffect} from "react";
import { GSCV } from "../contexts/GSCV";
import { CombatStuff } from "../contexts/combatStuff";



function CombatBoard({PCCT}) {
    

  const [testVal, setTestVal] = useState(0);
  const {dynamic, setDynamic,
    cMaxHealth, setCMaxHealth,
    cMana, setCMana,
    cMaxMana, setCMaxMana,
    cStamina, setCStamina,
    cMaxStamina, setCMaxStamina,
    cHealth, setCHealth}= useContext(CombatStuff)
    
//below is the useEffect that initializes combat display stats
    useEffect(() => {
        function initCombat() {
            setCHealth(PCCT.health);
            setCMaxHealth(PCCT.maxHealth);
            setCMana(PCCT.mana);    
            setCMaxMana(PCCT.maxMana);
            setCStamina(PCCT.stamina);
            setCMaxStamina(PCCT.maxStamina);   
        }
    
        if (cHealth == 999){
            initCombat();
        }
    })


  // player character combat token, used to represent the player's states loaded into a local variable to facilitate glorious battle!!
//   const PCCT = {
//     gold: gold,
//     score: score,
//     currentView: currentView,
//     damage: damage,
//     health: health,
//     maxHealth: maxHealth,
//     stamina: stamina,
//     maxStamina: maxStamina,
//     mana: mana,
//     maxMana: maxMana,
//     strength: strength,
//     dexterity: dexterity,
//     intelligence: intelligence,
//     fortitude: fortitude,
//     meleeSkill: meleeSkill,
//     rangedSkill: rangedSkill,
//     magicSkill: magicSkill
//   }
    const style = {
    color: `red`
  }
  var currentEnemies = []
    
    return(


<div>
    <div style = {style}> Health: {cHealth}/{PCCT.maxHealth}   Mana: {cMana}/{PCCT.maxMana}  Stamina: {cStamina}/{PCCT.maxStamina} </div>        
</div>


    )
}

export default CombatBoard;