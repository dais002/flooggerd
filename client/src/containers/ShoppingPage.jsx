import React, { useContext, useState, useEffect } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import PantryItem from "../components/PantryItem";

function ShoppingPage() {
  const { state } = useContext(ShoppingContext);
  const [pantryList, setPantryList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [pantryInput, setPantryInput] = useState("");
  const [moreInfo, setMoreInfo] = useState(false);

  useEffect(() => {
    setPantryList(state.filter((item) => item.list == 1));
    setShoppingList(state.filter((item) => item.list != 1));
  }, [state]);

  const displayPantryList = pantryList.map((pantry, idx) => {
    return <PantryItem pantry={pantry} key={idx} moreInfo={moreInfo} />;
  });

  const addPantryItem = (e) => {
    e.preventDefault();
    setPantryList([pantryInput, ...pantryList]);
  };

  return (
    <div>
      <h2>Pantry and Shopping List</h2>
      <hr />
      <div className="lists-container">
        <div className="pantry-container">
          <h3>Inventory</h3>
          <form className="pantry-form" onSubmit={addPantryItem}>
            <input type="text" placeholder="item description" />
            <select>
              <option value="" disabled hidden>
                Category
              </option>
              <option value="frozen">Frozen</option>
              <option value="produce">Fruits/Produce</option>
              <option value="meat">Meat</option>
              <option value="diary">Dairy</option>
              <option value="others">Others</option>
            </select>
            <input className="add-pantry" type="submit" value="Add to Pantry" />
          </form>
          <button
            className="more-info-button"
            onClick={() => setMoreInfo(!moreInfo)}
          >
            More Info
          </button>
          <table className="pantry-table">
            <tbody>
              <tr>
                <th>
                  <h4>Item:</h4>
                </th>
                <th>
                  <h4>{moreInfo && "Amount:"}</h4>
                </th>
                <th>
                  <h4>{moreInfo && "Category:"}</h4>
                </th>
                <th>
                  <h4>Notes:</h4>
                </th>
              </tr>
              {displayPantryList}
            </tbody>
          </table>
        </div>
        <div className="shopping-container">
          <h3>Shopping List</h3>
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
