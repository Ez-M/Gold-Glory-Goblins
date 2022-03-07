import React, {useState, useContext, useEffect} from "react";
import { GSCV } from "../contexts/GSCV";





function Navbar() {

    const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana} = useContext(GSCV) //importing context from GSCV

   


    return(
    <div>
        
        <button onClick={()=>setCurrentView("Store")}> Go to the store!</button>
        <button onClick={()=>setCurrentView("Grind")}> Go kill some goblins!</button>
        <button onClick={()=>setCurrentView("Home")}> Go to Guildhall!</button>

    </div>
    );

};

export default Navbar;