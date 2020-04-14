import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

const AddRecipe = forwardRef((props, ref) => {
  const [displayAddRecipe, setDisplayAddRecipe] = useState(false);

  // create methods on forwardRef to be used in other components
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplayAddRecipe(true);
  };

  const close = () => {
    setDisplayAddRecipe(false);
  };

  if (displayAddRecipe) {
    return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div className="modal-backdrop" onClick={close}>
          <div className="modal-box">
            <h2>Title</h2>
            <p>Written text inside modal-box</p>
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
  return null;
});

export default AddRecipe;
