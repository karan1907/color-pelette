import React from "react";
import Palette from "./component/Palette";
import seedColors from "./seedColours";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
