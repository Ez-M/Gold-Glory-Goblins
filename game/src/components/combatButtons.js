import React, { useState, useContext, useEffect } from "react";
import { GSCV } from "../contexts/GSCV";
import { CombatStuff } from "../contexts/combatStuff";

function CombatButtons({ PCCT, currentEnemies }) {
  const [testVal, setTestVal] = useState(0);
  const {
    dynamic,
    setDynamic,
    cMaxHealth,
    setCMaxHealth,
    cMana,
    setCMana,
    cMaxMana,
    setCMaxMana,
    cStamina,
    setCStamina,
    cMaxStamina,
    setCMaxStamina,
    cHealth,
    setCHealth,
  } = useContext(CombatStuff); //combatStuff is info relevant to running combat instances. Used here for conditionally rendering the navbar.

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
  //   useEffect(() => {

  //   })
  function healthHit1() {
    setCHealth(cHealth - 1);
    PCCT.health -= 1;
  };
  function stamHit1() {
    setCStamina(cStamina - 1);
    PCCT.stamina -= 1;
  };
  function manaHit1() {
    setCMana(cMana - 1);
    PCCT.mana -= 1;
  };

  //for testing goblin
  function setCStuff(){
      setCHealth(PCCT.health);
      setCStamina(PCCT.stamina);
      setCMana(PCCT.mana);
  }
 function combatDo(){
     for (const i in currentEnemies){
    currentEnemies[i].actions();
     setCStuff();
     }
 }
   


  return (
    <div>
      <button onClick={() => healthHit1()}>Button 1</button>
      <button onClick={() => manaHit1()}>Button mana</button>
      <button onClick={() => stamHit1()}>Button stam</button>
      <button onClick={()=> combatDo()}>Button Goblin</button>
    </div>
  );
}

export default CombatButtons;
