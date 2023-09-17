import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeStateProvider } from "./contexts/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeStateProvider>
      <App />
    </ThemeStateProvider>
  </React.StrictMode>
);
