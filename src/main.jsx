import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./globalStyles.js";
import { RegistriesContextProvider } from "./context/RegistriesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegistriesContextProvider>
      <GlobalStyle />
      <App />
    </RegistriesContextProvider>
  </React.StrictMode>
);
