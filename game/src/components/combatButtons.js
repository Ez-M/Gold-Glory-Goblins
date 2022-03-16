import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";
import { CombatStuff } from "../contexts/combatStuff";



function CombatButtons({PCCT}) {
  const [testVal, setTestVal] = useState(0);
  const {dynamic, setDynamic}= useContext(CombatStuff) //combatStuff is info relevant to running combat instances. Used here for conditionally rendering the navbar.


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
  
  
    return(
      <div>
          <button onClick={()=> { setDynamic(dynamic +1) }  }>Button 1</button> 
     </div>

    )
}

export default CombatButtons;