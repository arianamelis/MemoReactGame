import React from "react";
function Gamecard(props) {
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
          
          </ul>
        </div>
      </div>
    );
  }

  export default GameCard;
  