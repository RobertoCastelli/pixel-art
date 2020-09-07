import React, { useState } from "react";
export const DataContext = React.createContext();

const ContextProvider = (props) => {
  const initialCells = Array.from({ length: 900 });

  const [currentColor, setCurrentColor] = useState("#5f9ea0");
  const [cells] = useState(initialCells);

  const updateCell = (id) => {
    document
      .getElementById(id)
      .setAttribute("style", `background: ${currentColor}`);
  };

  const resetCell = (id) => {
    document.getElementById(id).removeAttribute("style");
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
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default ContextProvider;
