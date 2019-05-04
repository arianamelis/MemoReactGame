import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./styles/index.css";
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css'
console.log('in index of CRA')
ReactDOM.render(<App />, document.getElementById("root"));


serviceWorker.unregister();
