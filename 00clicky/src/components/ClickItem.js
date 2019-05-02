import React from "react";


function ClickItem(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item${props.shake ? " shake" : ""}`}
    />
  );
}

export default ClickItem;
