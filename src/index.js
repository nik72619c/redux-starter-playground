import React from "react";
import ReactDOM from "react-dom";
import Mycomponent from "./mycomponent";
import { Provider } from "react-redux";
import { store } from "./store";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div />
      <Mycomponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
