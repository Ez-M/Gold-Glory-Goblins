import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Scoreboard() {
    const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana, magicSkill, setMagicSkill, magXP, setMagXP,} = useContext(GSCV) //importing context from GSCV
    // used to communicate feedback to the player. Currently also used for debugging. 
    return(   
    <div>
          <div> Health: {health}/{maxHealth}   Mana: {mana}/{maxMana}  Stamina: {stamina}/{maxStamina} </div> 
          <br/>  
          <div> Gold: {gold}  Score: {score} CurrentView:   {currentView}   Damage: {damage}</div> 
          <br/> 
          <div> Strength: {strength} &#40;{strXP}/{strength}XP&#41;  Dexterity: {dexterity} &#40;{dexXP}/{dexterity}XP&#41;  Intelligence: {intelligence} &#40;{intXP}/{intelligence}XP&#41;   Fortitude: {fortitude} &#40;{fortXP}/{fortitude}XP&#41;</div> 
          <br/>
          <div>MeleeSkill: {meleeSkill} &#40;{melXP}/{meleeSkill}XP&#41; RangedSkill: {rangedSkill} &#40;{ranXP}/{rangedSkill}XP&#41;  MagicSkill: {magicSkill} &#40;{magXP}/{magicSkill}XP&#41;</div>
          
         </div>
          )

}

export default Scoreboard;