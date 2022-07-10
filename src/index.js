import React from "react";
import ReactDOM from "react-dom";
// Main App
import { App } from "./App";
// CSS
import "./style.css";

const Main = () => {
  return (
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main></Main>, document.getElementById("root"));
