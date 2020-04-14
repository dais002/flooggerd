import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

// forwardRef wraps your entire component and returns a function
// has 2 args - (props, ref)
// use React's useImperativeHandle to connect your ref
// returns an object with functions as methods

const Modal = forwardRef((props, ref) => {
  const [displaymodal, setDisplayModal] = useState(false);

  // create methods on forwardRef to be used by parent
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplayModal(true);
  };

  const close = () => {
    setDisplayModal(false);
  };

  if (displayModal) {
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

export default Modal;
