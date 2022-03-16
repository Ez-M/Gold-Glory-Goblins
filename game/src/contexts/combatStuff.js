import React, { createContext, useState, useContext } from "react";
import { GSCV } from "../contexts/GSCV";

export const CombatStuff = createContext();
const CombatProvider = (props) => {
  const {
    gold,
    score,
    currentView,
    damage,
    strength,
    dexterity,
    intelligence,
    fortitude,
    meleeSkill,
    rangedSkill,
    strXP,
    dexXP,
    intXP,
    fortXP,
    melXP,
    ranXP,
    setGold,
    setScore,
    setCurrentView,
    setDamage,
    setStrength,
    setDexterity,
    setIntelligence,
    setFortitude,
    setMeleeSkill,
    setRangedSkill,
    setStrXP,
    setDexXP,
    setIntXP,
    setFortXP,
    setMelXP,
    setRanXP,
    health,
    setHealth,
    maxHealth,
    setMaxHealth,
    stamina,
    setStamina,
    maxStamina,
    setMaxStamina,
    mana,
    setMana,
    maxMana,
    setMaxMana,
    magicSkill,
    setMagicSkill,
    magXP,
    setMagXP,
  } = useContext(GSCV); //importing context from GSCV

  //creating some basic universal functions to be used in combat, and an enemy constructor to be used for different enemy types
  const [fighting, setFighting] = useState(false);
  const [dynamic, setDynamic] = useState(1);
  const [cHealth, setCHealth] = useState(999);
  const [cMaxHealth, setCMaxHealth] = useState(999); 
  const [cMana, setCMana] = useState(999); 
  const [cMaxMana, setCMaxMana] = useState(999); 
  const [cStamina, setCStamina] = useState(999); 
  const [cMaxStamina, setCMaxStamina] = useState(999); 

  

 
function attackPlayer(number) {    
    setHealth(health + number);
}

  const enemy = {
    name: "enemy",
    HP: 1,
    CHP: 1,
    mana: 1,
    maxMana: 1,
    damage: 1,
    armor: 0,
    actionToken: 1,
    actions: function() {
      // setHealth(health + 1)
      this.actionToken+=1
    },
    report: function() {
      setHealth(health - 1)
      console.log(this.actionToken)
    }
  };

  return (
    <CombatStuff.Provider
      value={{
        enemy,
        fighting,
        setFighting,
        dynamic,
        setDynamic,
        cMaxHealth, setCMaxHealth,
        cMana, setCMana,
        cMaxMana, setCMaxMana,
        cStamina, setCStamina,
        cMaxStamina, setCMaxStamina,
        cHealth, setCHealth
      }}
    >
      {props.children}
    </CombatStuff.Provider>
  );
};
export default CombatProvider;
