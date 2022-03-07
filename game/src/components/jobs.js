import React, {useState, useContext, useEffect} from "react";
import { GSCV } from "../contexts/GSCV";





function Jobs() {

    const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana, magicSkill, setMagicSkill, magXP, setMagXP,} = useContext(GSCV) //importing context from GSCV

   


    return(
    <div>
        
        <button onClick={()=>setCurrentView("404")}> Go Steal Something!</button> 
        <button onClick={()=>setCurrentView("Grind")}> Go Kill Something!</button>
        <button onClick={()=>setCurrentView("404")}> Go Make Something!</button>
        <button onClick={()=>setCurrentView("404")}> Go Find Something!</button>
        

    </div>
    );

};

export default Jobs;