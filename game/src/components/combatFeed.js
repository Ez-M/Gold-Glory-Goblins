import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";
import { CombatStuff } from "../contexts/combatStuff";



function CombatFeed() {
  const [testVal, setTestVal] = useState(0);
  const {dynamic, setDynamic,
    cMaxHealth, setCMaxHealth,
    cMana, setCMana,
    cMaxMana, setCMaxMana,
    cStamina, setCStamina,
    cMaxStamina, setCMaxStamina,
    cHealth, setCHealth}= useContext(CombatStuff) //combatStuff is info relevant to running combat instances. Used here for conditionally rendering the navbar.
  // player character combat token, used to represent the player's states loaded into a local variable to facilitate glorious battle!!
 

      return(
      <div>
    CombatFeed
    <br/>
    {/* {dynamic} */}
    {cHealth}
    </div>

    )
}

export default CombatFeed;