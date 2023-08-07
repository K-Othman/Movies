import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MoviesApiContext from "./context/MoviesApiContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <MoviesApiContext>
        <App />
      </MoviesApiContext>
    </React.StrictMode>
  </BrowserRouter>
);
