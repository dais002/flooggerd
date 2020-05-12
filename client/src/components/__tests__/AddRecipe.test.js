import React, { useContext } from "react";
import AddRecipe from "../AddRecipe.jsx";
import ReactDOM from 'react-dom'


describe("add recipe modal", () => {
  let recipe;

  beforeEach(() => {
    recipe = {
      name: "",
      type: "",
      cuisine: "",
      time: "",
      instructions: {},
      ingredients: {},
      notes: "",
    };
  });

  test('it renders', () => {
    const container = document.createElement('div')
    ReactDOM.render(<AddRecipe />, container)
    
    const form = container.querySelector('button');
    const { ingredients } = form.name

    console.log('ingredients', ingredients)

  })

});

