import React from "react";
import "../styles/App.css";

function GameCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>ID:</strong> {props.id}
          </li>
          <li>
            <strong>image:</strong> {props.image}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GameCard;
