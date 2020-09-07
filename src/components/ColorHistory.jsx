import React, { useContext } from "react";
import { DataContext } from "../context";

const ColorHistory = () => {
  const context = useContext(DataContext);
  const { colorHistory, setCurrentColor, resetColorHistory } = context;

  return (
    <div className="color-history-wrapper">
      {colorHistory.map((color, id) => {
        return (
          <input
            key={id}
            type="color"
            className="color-history"
            readOnly
            value={color}
            onClick={(e) => {
              e.preventDefault();
              setCurrentColor(color);
            }}
            onDoubleClick={() => resetColorHistory(id)}
          />
        );
      })}
    </div>
  );
};

export default ColorHistory;
