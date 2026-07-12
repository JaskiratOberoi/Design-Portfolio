import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

// review aid: /?static renders everything at final animation state
// (screenshot tooling can't wait for IntersectionObserver-gated reveals)
if (new URLSearchParams(window.location.search).has("static")) {
  document.documentElement.classList.add("static-mode");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
