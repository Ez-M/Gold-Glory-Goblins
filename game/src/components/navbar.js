import React, {useState, useContext, useEffect} from "react";
// import { CombatStuff } from "../contexts/combatStuff";
import { GSCV } from "../contexts/GSCV";







function Navbar() {

    const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP,
         intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude,
          setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth,
           stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana, magicSkill, setMagicSkill, magXP,
            setMagXP,} = useContext(GSCV) //importing context from GSCV
            // const {attackPlayer,enemy, fighting, setFighting}= useContext(CombatStuff) //combatStuff is info relevant to running combat instances. Used here for conditionally rendering the navbar.
   
if(currentView != 'Fighting') {
    return(
        <div>
            
            <button onClick={()=>setCurrentView("Store")}> Go to the store!</button>
            <button onClick={()=>setCurrentView("Jobs")}> Go get some gold!</button>
            <button onClick={()=>setCurrentView("Home")}> Go to Guildhall!</button>
    
        </div>
        );

} else {return (<div> </div>)}

    

};

export default Navbar;