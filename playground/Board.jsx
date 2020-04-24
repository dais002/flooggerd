import React from "react";

function board() {
  const fullBoard = [];
  for (let i = 0; i < 8; i++) {
    const rows = [];
    for (let j = 0; j < 8; j++) {
      (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
        ? rows.push(<div className="blackbox">square</div>)
        : rows.push(<div className="whitebox">square</div>);
    }
    fullBoard.push(rows);
  }
  console.log("fullboard", fullBoard);

  function isEven(num) {
    return num % 2 === 0;
  }

  return <div className="fullboard">{fullBoard}</div>;
}
export default board;

[0, 0], [0, 2], [0, 4], [0, 6][(1, 1)], [1, 3], [1, 5], [1, 7];
