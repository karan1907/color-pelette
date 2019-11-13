import React from "react";
import Palette from "./component/Palette";
import seedColors from "./seedColours";
import { generatePalette } from "./colorHelpers/colorHelpers.js";

class App extends React.Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div className="App">
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
