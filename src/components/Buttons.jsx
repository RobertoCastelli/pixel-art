import React, { useContext } from "react";
import { DataContext } from "../context";

const Buttons = () => {
  const context = useContext(DataContext);
  const {
    isToggleOn,
    clearAllCells,
    handleToggle,
    handleSelect,
    dataImages,
  } = context;

  return (
    <div>
      <button onClick={clearAllCells}>clear all</button>
      <button onClick={handleToggle}>
        {isToggleOn ? "sprite on" : "sprite off"}
      </button>
      <select onChange={(e) => handleSelect(e.target.value)}>
        {dataImages.map((img, id) => {
          return (
            <option key={id} value={img.src}>
              {img.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Buttons;
