import React from "react";
import "../styles/App.css";
import ClickItem from "./ClickItem"

function GameCard(props) {
  return (
    <div className="card" onClick={ () => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={[]} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
           
          </li>
          <li>
            <strong>ID:</strong> {props.id}
          </li>
       
        </ul>
      </div>
    </div>
  );
}

export default GameCard;
