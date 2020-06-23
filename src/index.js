import React from "react";
import ReactDOM from "react-dom";
import fixHeight from "./helpers/fixHeight";
import "./index.css";

import App from "./App/App";

fixHeight();
window.addEventListener("resize", fixHeight);

ReactDOM.render(<App />, document.getElementById("root"));
