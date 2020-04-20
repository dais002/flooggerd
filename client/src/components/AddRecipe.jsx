import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useContext,
  useEffect,
} from "react";
import { RecipeContext } from "../RecipeContext";
import axios from "axios";

const AddRecipe = forwardRef((props, ref) => {
  const { addRecipe } = useContext(RecipeContext);

  const [displayAddRecipe, setDisplayAddRecipe] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    type: "",
    cuisine: "",
    time: "",
    instructions: {},
    ingredients: {},
    notes: "",
  });

  // escape button to close modal
  useEffect(() => {
    const escapeHandler = (event) => {
      if (event.keyCode === 27) {
        setDisplayAddRecipe(false);
      }
    };
    window.addEventListener("keydown", escapeHandler);
    return () => {
      window.removeEventListener("keydown", escapeHandler);
    };
  }, []);

  // create methods on forwardRef to be used in other components
  useImperativeHandle(ref, () => {
    return {
      openModal: () => setDisplayAddRecipe(true),
      closeModal: () => setDisplayAddRecipe(false),
    };
  });

  // development use - test to see if state updates on each property
  // useEffect(() => {
  //   console.log(newRecipe);
  // }, [newRecipe]);

  // global onchange handler for non-nested properties
  const onChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
    setNewRecipe({
      ...newRecipe,
      [name]: value,
    });
  };

  // reusable function to create more input fields
  const addField = (event) => {
    event.preventDefault();
    if (event.target.name == "ingredients")
      setIngredients([...ingredients, []]);
    if (event.target.name == "instructions")
      setInstructions([...instructions, ""]);
  };

  // ingredients handler to track inputs on each field
  const ingredientsHandler = (event) => {
    const input = event.target.value;
    const idx = event.target.id;
    const field = event.target.name;
    const copy = [...ingredients];

    if (field == "ingredient") {
      copy[idx][0] = input;
    }
    if (field == "amount") {
      copy[idx][1] = input;
    }
    setIngredients(copy);
  };

  // display ingredients field
  const ingredientFields = ingredients.map((ingredient, idx) => {
    return (
      <div key={idx}>
        <input
          type="text"
          name="ingredient"
          id={idx}
          placeholder="type of ingredient"
          onChange={ingredientsHandler}
        />
        <input
          type="text"
          name="amount"
          id={idx}
          placeholder="amount"
          onChange={ingredientsHandler}
        />
      </div>
    );
  });

  // instructions handler to track inputs
  const instructionsHandler = (event) => {
    const idx = event.target.id;
    const copy = [...instructions];
    copy[idx] = event.target.value;
    setInstructions(copy);
  };

  // display instruction fields
  const instructionFields = instructions.map((instruction, idx) => {
    return (
      <div key={idx}>
        <input
          id={idx}
          type="text"
          name="instruction"
          placeholder="instruction"
          onChange={instructionsHandler}
        />
      </div>
    );
  });

  // form submit handler
  const postNewRecipe = (event) => {
    event.preventDefault();

    // reconstruct ingredients object from array
    const ingredientsObject = ingredients.reduce((acc, current) => {
      return { ...acc, [current[0]]: current[1] };
    }, {});

    // reconstruct instructions object from array
    const instructionsObject = instructions.reduce((acc, current, idx) => {
      return { ...acc, [idx + 1]: current };
    }, {});

    // refactor to useReducer and move to context API to reuse if needed
    const newRecipeObject = {
      ...newRecipe,
      ingredients: ingredientsObject,
      instructions: instructionsObject,
    };

    axios
      .post("/api/recipes", newRecipeObject)
      .then((res) => {
        console.log("recipe posted");
        addRecipe(res.data);
      })
      .catch((err) => {
        console.log("recipe did not post");
        alert("posting error - please try again");
      });

    setDisplayAddRecipe(false);
  };

  if (displayAddRecipe) {
    return (
      <div className="modal-backdrop">
        <div className="modal-box">
          <form className="addrecipe-form" onSubmit={postNewRecipe}>
            <h2>Add Recipe:</h2>
            <hr />
            <div className="addrecipe-form-lines">
              <div>
                <label>
                  name:
                  <input
                    type="text"
                    name="name"
                    placeholder="name input"
                    onChange={onChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  type:
                  <input
                    type="text"
                    name="type"
                    placeholder="type input"
                    onChange={onChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  cuisine:
                  <input
                    type="text"
                    name="cuisine"
                    placeholder="cuisine input"
                    onChange={onChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  time:
                  <input
                    type="text"
                    name="time"
                    placeholder="time input"
                    onChange={onChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  notes:
                  <input
                    type="text"
                    name="notes"
                    placeholder="notes input"
                    onChange={onChange}
                  />
                </label>
              </div>
              <div>
                <label>ingredients:</label>
                <button name="ingredients" onClick={addField}>
                  add ingredients
                </button>
                {ingredientFields}
              </div>
              <div>
                <label>instructions:</label>
                <button name="instructions" onClick={addField}>
                  add instructions
                </button>
                {instructionFields}
              </div>
            </div>
            <input className="add-recipe-submit" type="submit" />
          </form>
          <button onClick={() => setDisplayAddRecipe(false)}>Close</button>
        </div>
      </div>
    );
  } else return null;
});

export default AddRecipe;
