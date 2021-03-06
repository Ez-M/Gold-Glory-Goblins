import React, { createContext, useState } from 'react'
export const GSCV = createContext()
const GSCVProvider = (props) => {
  //This is me doing the same thing as above but using states because I think I need to
  // in order to get things to dynamically render/update
  const [gold, setGold] = useState(0); //Player's current gold
  const [score, setScore] = useState(0); //Player's total gold ever earned (plus achivements?)
  const [currentView, setCurrentView] = useState("Home"); //variable to tell the game what tab to render
  const [damage, setDamage] = useState(1); // Player's current damage value (clicker multiplier lmao)
  const [health, setHealth] = useState(5);
  const [maxHealth, setMaxHealth] = useState(5);
  const [stamina, setStamina] = useState(5);
  const [maxStamina, setMaxStamina] = useState(5);
  const [mana, setMana] = useState(5);
  const [maxMana, setMaxMana] = useState(5);

  const [strength, setStrength] = useState(1); // Player's current strength value (clicker multiplier lmao)
  const [dexterity, setDexterity] = useState(1); // Player's current dexterity value (clicker multiplier lmao)
  const [intelligence, setIntelligence] = useState(1); // Player's current intelligence value (clicker multiplier lmao)
  const [fortitude, setFortitude] = useState(1); // Player's current fortitude value (clicker multiplier lmao)
  const [meleeSkill, setMeleeSkill] = useState(1); // Player's current meleeSkill value (clicker multiplier lmao)
  const [rangedSkill, setRangedSkill] = useState(1); // Player's current rangedSkill value (clicker multiplier lmao)
  const [magicSkill, setMagicSkill] = useState(0); //Player's current magic skill

  const [strXP, setStrXP] = useState(0); // Player's current Strength EXP (used to determine advancement)
  const [dexXP, setDexXP] = useState(0);
  const [intXP, setIntXP] = useState(0);
  const [fortXP, setFortXP] = useState(0);
  const [melXP, setMelXP] = useState(0);
  const [ranXP, setRanXP] = useState(0);
  const [magXP, setMagXP] = useState(0); 

    return (
         <GSCV.Provider 
            value={{
                gold,
                setGold,
                score,
                setScore,
                currentView,
                setCurrentView,
                damage,
                setDamage,
                strength,
                setStrength,
                dexterity,
                setDexterity,
                intelligence,
                setIntelligence,
                fortitude,
                setFortitude,
                meleeSkill,
                setMeleeSkill,
                rangedSkill,
                setRangedSkill,
                strXP,
                setStrXP,
                dexXP, setDexXP,
                intXP, setIntXP,
                fortXP, setFortXP,
                melXP, setMelXP,
                ranXP, setRanXP,
                health, setHealth,
                maxHealth, setMaxHealth,
                stamina, setStamina,
                maxStamina, setMaxStamina,
                mana, setMana,
                maxMana, setMaxMana,
                magicSkill, setMagicSkill, magXP, setMagXP,


             }}>
               {props.children}
         </GSCV.Provider>
    )
}
export default GSCVProvider