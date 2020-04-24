import React from "react";

function PantryItem({ pantry, moreInfo }) {
  console.log("in pantry item", pantry);
  return (
    <tr>
      <td>
        <h4>{pantry.item}</h4>
      </td>
      <td>
        <p>{moreInfo && pantry.amount && pantry.amount}</p>
      </td>
      <td>
        <p>{moreInfo && pantry.category && pantry.category}</p>
      </td>
      <td>
        <p>{pantry.notes && pantry.notes}</p>
      </td>
    </tr>
  );
}

export default PantryItem;
