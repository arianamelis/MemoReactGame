import React from "react";
import '../styles/index.css';


function Navbar(props) {
  
        return (
            <nav className='navbar'>
                <ul>
                    <li className='brand'>
                        <a href='/'>Memory Game</a>
                    </li>
                    <li>   | Top Score: {props.topScore}</li>
                    <li>Score: {props.score}</li>
                      
                </ul>
            </nav>
        );
    }


export default Navbar;