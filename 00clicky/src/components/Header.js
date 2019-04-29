import React from "react";
import "../styles/App.css";

const img ='./assets/images/headerBG.jpg'

function Header(props) {
   
        return (
            <header className='header' style={{ backgroundImage: `url(${img})` }}>
                <div className='headerContainer'>
                    <h1>Clicky Game!</h1>
                    <h2>Click on all images to win, but don't click the same image more than once!</h2>
                </div>
            </header>
        );
    }


export default Header;