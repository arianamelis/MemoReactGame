import React from "react";
import '../styles/index.css';
import "../styles/App.css";

function Navbar(props) {
  
        return (
            <nav className='navbar'>
                <ul>
                    <li className='brand'>
                        <a onClick={props.changeRoute}>Daily Memory Game</a>
                    </li>
                    <li>   | Top Score: {props.topScore}</li>
                    <li>Score: {props.score}</li>
                      
                </ul>
            </nav>
        );
    }


export default Navbar;