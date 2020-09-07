import React, { useContext } from "react";
import { DataContext } from "../context";
import Buttons from "../components/Buttons";
import tiger from "../images/tiger.png";

const Grid = () => {
  const context = useContext(DataContext);
  const { cells, updateCell, resetCell } = context;

  return (
    <div>
      <div className="grid-wrapper">
        <img
          id="grid-image"
          className="grid-image"
          src={tiger}
          alt="grid-img"
        />
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
      <Buttons />
    </div>
  );
};

export default Grid;
