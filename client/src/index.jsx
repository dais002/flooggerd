import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext.jsx";
import { ShoppingProvider } from "./context/ShoppingContext.jsx";

import "./normalize.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <RecipeProvider>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </RecipeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
