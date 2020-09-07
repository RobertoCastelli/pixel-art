import React, { useState } from "react";
export const DataContext = React.createContext();

const ContextProvider = (props) => {
  const initialCells = Array.from({ length: 1600 });

  const [currentColor, setCurrentColor] = useState("#5f9ea0");
  const [cells] = useState(initialCells);
  const [colorHistory, setColorHistory] = useState(["#ffffff", "#000000"]);

  const updateCell = (id) => {
    document
      .getElementById(id)
      .setAttribute("style", `background: ${currentColor}`);
    updateHistory();
  };

  const updateHistory = () => {
    const tempColorHistory = [...colorHistory];
    tempColorHistory.push(currentColor);
    setColorHistory([...new Set(tempColorHistory)]);
  };

  const resetCell = (id) => {
    document.getElementById(id).removeAttribute("style");
  };

  const resetColorHistory = (id) => {
    const tempColorHistory = [...colorHistory];
    tempColorHistory.splice(id, 1);
    setColorHistory(tempColorHistory);
  };

  const clearAllCells = () => {
    cells.map((_, id) => document.getElementById(id).removeAttribute("style"));
    setColorHistory(["#ffffff", "#000000"]);
    setCurrentColor("#5f9ea0");
  };

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
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default ContextProvider;
