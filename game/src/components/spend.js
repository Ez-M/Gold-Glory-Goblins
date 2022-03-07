import { Button } from "bootstrap";
import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Spend() {

    const {gold, score, currentView, damage, strength, dexterity, intelligence, fortitude, meleeSkill, rangedSkill, strXP, dexXP, intXP, fortXP, melXP, ranXP, setGold, setScore,setCurrentView, setDamage, setStrength, setDexterity, setIntelligence, setFortitude, setMeleeSkill, setRangedSkill, setStrXP, setDexXP, setIntXP, setFortXP, setMelXP, setRanXP, health, setHealth, maxHealth, setMaxHealth, stamina, setStamina, maxStamina, setMaxStamina, mana, setMana, maxMana, setMaxMana} = useContext(GSCV) //importing context from GSCV
   //BELOW: a function for increasing the damage value in exchange for gold
    function damageUp1(){
        if (gold >= damage*5) {
        setGold(gold - damage*5)
        setDamage(damage+1);
        }
    }

    function healthUp1(){
        if (gold >= maxHealth+5) {
        setGold(gold - maxHealth+5);
        setMaxHealth(maxHealth+5);
        setHealth(health+5);
        }
    }

    function manaUp1(){
        if (gold >= maxMana*5) {
        setGold(gold - maxMana*5);
        setMaxMana(maxMana+1);
        setMana(mana+1);
        }
    }


return(<div>
    Come, welcome to Bog Bob's Bootleg Bazaar! If it can be smuggled, it can be sold!
    <br/>
    <button onClick={damageUp1}>Upgrade 1 damage for {damage*5} gold</button>
    <button onClick={healthUp1}>Upgrade 5 Health for {maxHealth+5} gold</button>
    <button onClick={manaUp1}>Upgrade 1 mana for {maxMana*5} gold</button>

    </div>)

}
export default Spend;
