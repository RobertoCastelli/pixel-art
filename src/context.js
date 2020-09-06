import React, { useState, useEffect } from "react";
export const DataContext = React.createContext();

const ContextProvider = (props) => {
  const [currentColor, setCurrentColor] = useState("#5f9ea0");
  useEffect(() => {
    console.log(currentColor);
  }, [currentColor]);

  return (
    <div>
      <DataContext.Provider value={{ currentColor, setCurrentColor }}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export default ContextProvider;
