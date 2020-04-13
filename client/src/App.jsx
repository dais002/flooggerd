import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./containers/NavBar";
import Recipes from "./containers/Recipes";
import AboutUs from "./containers/AboutUs";
import ShoppingList from "./containers/ShoppingList";

const App = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Recipes />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/shoppinglist">
          <ShoppingList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
