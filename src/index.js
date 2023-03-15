// React
import React from "react";
// Create Root
import ReactDOM from "react-dom";
// Main App
import App from "./App";
// CSS
import "./style.css";

const Main = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// eslint-disable-next-line no-undef
ReactDOM.render(<Main />, document.getElementById("root"));
