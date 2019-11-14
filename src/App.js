import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./component/Palette";
import seedColors from "./seedColours";
import { generatePalette } from "./colorHelpers/colorHelpers.js";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>INDIVIADUAL Palette</h1>}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
