import React, { useContext } from "react";
import { DataContext } from "../context";
import ColorHistory from "./ColorHistory";

const ColorPicker = () => {
  const context = useContext(DataContext);
  const { currentColor, setCurrentColor } = context;

  return (
    <div>
      <div className="color-picker-wrapper">
        <input
          type="color"
          className="color-picker"
          value={currentColor}
          onChange={(e) => setCurrentColor(e.target.value)}
        />
      </div>
      <ColorHistory />
    </div>
  );
};

export default ColorPicker;
