import React, {useState, useContext} from "react";
import { GSCV } from "../contexts/GSCV";

import Grind from "./grind";
import Spend from "./spend";
import Scoreboard from "./scoreboard";
import Home from "./home";
import RenderSwitcher from "./renderSwitcher";
import Navbar from "./navbar";

import GSCVProvider from "../contexts/GSCV";
import { render } from "react-dom";


function Main() {

   

    return(   
      
        <GSCVProvider>
        Gold, Glory, and Goblins!
        <Navbar />
        <br/>
               
       <RenderSwitcher />
        <br/>
        <Scoreboard />
        </GSCVProvider>
     )

}

export default Main;