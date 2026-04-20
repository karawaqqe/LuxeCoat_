import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SvgSprite from "./components/SvgSprite.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SvgSprite />
    <App />
  </React.StrictMode>
);
