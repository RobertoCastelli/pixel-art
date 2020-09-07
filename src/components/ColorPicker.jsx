import React, { useContext } from "react";
import { DataContext } from "../context";

const ColorPicker = () => {
  const context = useContext(DataContext);
  const { currentColor, setCurrentColor } = context;

  return (
    <div className="color-picker-wrapper">
      <input
        type="color"
        className="color-picker"
        value={currentColor}
        onChange={(e) => setCurrentColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
