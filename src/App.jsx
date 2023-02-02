import { useState } from "react";
import "./App.css";
import DetailComponent from "./assets/components/DetailComponent";
import Skillcomponent from "./assets/components/Skillcomponent";

function App() {
  return (
    <div className="App">
      <img
        src="src/assets/Image/portfolio-pic.avif"
        alt="girl-portfolio-image"
      />
      <DetailComponent></DetailComponent>
      <div>
        <Skillcomponent></Skillcomponent>
      </div>
    </div>
  );
}

export default App;
