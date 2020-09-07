import React, { useState } from "react";

export const DataContext = React.createContext();

const ContextProvider = (props) => {
  //--> GENERATE ARRAY OF 1600 CELLS
  const initialCells = Array.from({ length: 900 });

  //--> STATES
  const [currentColor, setCurrentColor] = useState("#5f9ea0");
  const [cells] = useState(initialCells);
  const [colorHistory, setColorHistory] = useState(["#ffffff", "#000000"]);
  const [isToggleOn, setIsToggleOn] = useState(false);

  //--> CHANGE COLOR AND ADD IT TO HISTORY
  const updateCell = (id) => {
    document
      .getElementById(id)
      .setAttribute("style", `background: ${currentColor}`);
    updateHistory();
  };

  //--> ADD COLOR HISTORY
  const updateHistory = () => {
    const tempColorHistory = [...colorHistory];
    tempColorHistory.push(currentColor);
    setColorHistory([...new Set(tempColorHistory)]);
  };

  //--> CANCEL SINGLE PIXEL WITH DOUBLE CLICK
  const resetCell = (id) => {
    document.getElementById(id).removeAttribute("style");
  };

  //--> CANCEL COLOR HISOTRY WITH DOUBLE CLICK
  const resetColorHistory = (id) => {
    const tempColorHistory = [...colorHistory];
    tempColorHistory.splice(id, 1);
    setColorHistory(tempColorHistory);
  };

  //--> ALL CELLS COLOR WHITE AND RESET HISTORY PALETTE
  const clearAllCells = () => {
    cells.map((_, id) => document.getElementById(id).removeAttribute("style"));
    setColorHistory(["#ffffff", "#000000"]);
    setCurrentColor("#5f9ea0");
  };

  //--> TOGGLE ON - OFF BUTTON AND SPRITE VISIBILITY
  const handleToggle = () => {
    const gridImage = document.getElementById("grid-image");
    isToggleOn
      ? gridImage.setAttribute("style", "visibility: visible")
      : gridImage.setAttribute("style", "visibility: hidden");
    setIsToggleOn(!isToggleOn);
  };

  //--> RENDER
  return (
    <div>
      <DataContext.Provider
        value={{
          currentColor,
          setCurrentColor,
          cells,
          updateCell,
          resetCell,
          clearAllCells,
          colorHistory,
          resetColorHistory,
          isToggleOn,
          handleToggle,
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default ContextProvider;
