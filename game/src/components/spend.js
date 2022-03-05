import { Button } from "bootstrap";
import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

function Spend() {

    const {gold, score, currentView, damage, setGold, setScore,setCurrentView, setDamage} = useContext(GSCV) //importing context from GSCV
    function damageUp(){
        setDamage(damage+1);
    }


return(<div>
    <button onClick={damageUp}>Placeholder lmao</button>
    </div>)

}
export default Spend;
