import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Divided by the width of the viewport is how much rem
// now we set the total width of the viewport to 750rem
document.documentElement.style.fontSize = 30 / 750 + "vw";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
