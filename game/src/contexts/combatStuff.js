import React, { createContext, useState, useContext } from 'react'
export const combatStuff = createContext()
const combatProvider = (props) => {

    const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana, magicSkill, setMagicSkill, magXP, setMagXP,} = useContext(GSCV) //importing context from GSCV

  //creating some basic universal functions to be used in combat, and an enemy constructor to be used for different enemy types
    var fighting = false

  function attackPlayer(number){
      setHealth()
  }

  const enemy ={
      name: enemy,
      HP: 1,
      CHP: 1,
      mana: 1,
      maxMana: 1,
      damage: 1,
      armor: 0,
      actionToken:0,
      actions: [attackPlayer(this.damage)]

  }


    return (
         <Combat.Provider 
            value={{
                
                attackPlayer,
                enemy, fighting


             }}>
               {props.children}
         </Combat.Provider>
    )
}
export default combatProvider