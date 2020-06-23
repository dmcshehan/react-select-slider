import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App/App";

// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

ReactDOM.render(<App />, document.getElementById("root"));
