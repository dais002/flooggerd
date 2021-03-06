import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./containers/NavBar.jsx";
import HomePage from "./containers/HomePage.jsx";
import AboutUs from "./containers/AboutUsPage.jsx";
import ShoppingList from "./containers/ShoppingPage.jsx";
import Placeholder from "./containers/Placeholder.jsx";
import RecipePage from "./containers/RecipePage.jsx";

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
        <Route exact path="/placeholder">
          <Placeholder />
        </Route>
        <Route path="/shoppinglist">
          <ShoppingList />
        </Route>
        <Route path="/recipe/:id">
          <RecipePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
