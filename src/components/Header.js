import React from "react";
import '../styles/index.css';
import "../styles/App.css";
import LandingBtn from "./Landingpage/LandingBtn";

function Header(props) {
   
        return (
            <header>
                <div className='header'>
                <div className='headerContainer'>
                    <h1>Daily Memory Game!</h1>
                    <h2>Challenge yourself.</h2>
                       <strong>Can you remember the most influential people of the 21 century?</strong>
                    <p>Work your brain out. Click each human face once. 
                       To loose click the same face twice, the game will reset</p>
                       <LandingBtn changeRoute={props.changeRoute}/>
                </div>
               
                </div>
            </header>
        );
    }


export default Header;