import React, { useEffect, useState, useRef } from "react";

function modalExercise() {
  const outside = useRef();
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    if (outside.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const getClick = document.addEventListener("click", handleClick);
    return () => {
      getClick();
    };
  }, []);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>toggle modal</button>
      {Open ? (
        <div className="modal-example">
          <p>Modal is open</p>
        </div>
      ) : null}
    </div>
  );
}

export default modalExercise;
