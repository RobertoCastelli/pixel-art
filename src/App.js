import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";
import ContextProvider from "./context";
import ColorHistory from "./components/ColorHistory";

function App() {
  return (
    <div className="container">
      <div className="content">
        <ContextProvider>
          <Header />
          <ColorPicker />
          <ColorHistory />
          <Grid />
        </ContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
