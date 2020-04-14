import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./containers/NavBar.jsx";
import HomePage from "./containers/HomePage.jsx";
import AboutUs from "./containers/AboutUsPage.jsx";
import ShoppingList from "./containers/ShoppingPage.jsx";
import PantryPage from "./containers/PantryPage.jsx";

const App = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/pantry">
          <PantryPage />
        </Route>
        <Route path="/shoppinglist">
          <ShoppingList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
