import React, { useContext } from "react";
import { DataContext } from "../context";

const Buttons = () => {
  const context = useContext(DataContext);
  const { isToggleOn, clearAllCells, handleToggle } = context;

  return (
    <div>
      <button onClick={clearAllCells}>clear all</button>
      <button onClick={handleToggle}>
        {isToggleOn ? "sprite on" : "sprite off"}
      </button>
    </div>
  );
};

export default Buttons;
