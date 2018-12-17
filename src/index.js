import React from "react";
import ReactDOM from "react-dom";
import Mycomponent from "./mycomponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Mycomponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
