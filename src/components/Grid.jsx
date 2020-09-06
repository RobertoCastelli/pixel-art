import React from "react";
const Grid = () => {
  //--> create an array of 600 squares with a state of false
  const cells = Array.from({ length: 600 }, () => ({
    state: false,
  }));

  const updateCell = (cell) => {
    cell.state = true;
  };

  return (
    <div className="grid-wrapper">
      {cells.map((cell, id) => (
        <div
          key={id}
          style={{ backgroundColor: cell.state ? "red" : "blue" }}
          className="grid"
          onClick={updateCell(cell)}
        ></div>
      ))}
    </div>
  );
};

export default Grid;
