import React, { useContext } from "react";
import Buttons from "../components/Buttons";
import { DataContext } from "../context";

const Grid = () => {
  const context = useContext(DataContext);
  const { cells, updateCell, resetCell, images } = context;

  return (
    <div>
      <div className="grid-wrapper">
        <img
          id="grid-image"
          className="grid-image"
          src={images}
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
