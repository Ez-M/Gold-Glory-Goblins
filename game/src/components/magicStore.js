import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function MagicStore() {

    const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana, magicSkill, setMagicSkill, magXP, setMagXP,} = useContext(GSCV) //importing context from GSCV

// I want to use this for offering quests/bounties to the player. Currently unused. 
    // function ifMag(){

        if(magicSkill <= 0){

            return(

                <div>
           <p> A feather dressed shaman dances around an assortment of strange trinkets and painted bones. "Chief Chief says you see stars, but War Chief needs catch-stone!</p>
            <br/>
           <p>"No spells, none! Very busy make things for War Chief! No time to get fairy dust, you bring fairy dust and we see what the stars say!"</p> 
            
            <button onClick={()=>setMagicSkill(magicSkill+1)}>Hand over fairy dust</button>
            </div>
            )
            
        } else if(magicSkill >=1){
           return( <div>magic skill is 1 or more</div>)
        };
    // }
    
//     return(
//    {ifMag}
//     )
}

export default MagicStore;