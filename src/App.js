import React from "react";
import Palette from "./component/Palette";
import seedColors from "./seedColours";
import { generatePalette } from "./colorHelpers/colorHelpers.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
