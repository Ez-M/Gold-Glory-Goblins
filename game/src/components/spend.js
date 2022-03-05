import { Button } from "bootstrap";
import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Spend() {

    const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana} = useContext(GSCV) //importing context from GSCV
   //BELOW: a function for increasing the damage value in exchange for gold
    function damageUp(){
        if (gold >= damage*5) {
        setGold(gold - damage*5)
        setDamage(damage+1);

        }
    }


return(<div>
    <button onClick={damageUp}>{damage*5}</button>
    </div>)

}
export default Spend;
