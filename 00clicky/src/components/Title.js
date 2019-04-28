import React from "react";
import "../styles/App.css";

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;
