import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";
import ContextProvider from "./context";

function App() {
  return (
    <div className="container">
      <div className="content">
        <ContextProvider>
          <Header />
          <ColorPicker />
          <Grid />
        </ContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;

//TODO: change background sprite
//TODO: change grid size
