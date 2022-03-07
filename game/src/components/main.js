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
// Used as a primary render page, so that I can pass stats to the child components and to help with organization

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