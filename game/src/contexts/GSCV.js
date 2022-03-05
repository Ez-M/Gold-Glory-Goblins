import React, { createContext, useState } from 'react'
export const GSCV = createContext()
const GSCVProvider = (props) => {
  //This is me doing the same thing as above but using states because I think I need to
  // in order to get things to dynamically render/update
  const [gold, setGold] = useState(0); //Player's current gold
  const [score, setScore] = useState(0); //Player's total gold ever earned (plus achivements?)
  const [currentView, setCurrentView] = useState(""); //variable to tell the game what tab to render
  const [damage, setDamage] = useState(1); // Player's current damage value (clicker multiplier lmao)
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
                setDamage
             }}>
               {props.children}
         </GSCV.Provider>
    )
}
export default GSCVProvider