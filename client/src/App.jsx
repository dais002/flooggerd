import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./containers/NavBar.jsx";
import Recipes from "./containers/RecipesPage.jsx";
import AboutUs from "./containers/AboutUsPage.jsx";
import ShoppingList from "./containers/ShoppingPage.jsx";

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
