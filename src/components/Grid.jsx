import React, { useContext } from "react";
import { DataContext } from "../context";

const Grid = () => {
  const context = useContext(DataContext);
  const { cells, updateCell, resetCell } = context;

  return (
    <div>
      <div className="grid-wrapper">
        {cells.map((_, i) => {
          return (
            <div
              id={i}
              key={i}
              className="grid"
              onClick={() => updateCell(i)}
              onDoubleClick={() => resetCell(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;