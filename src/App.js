import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./component/Palette";
import PaletteList from "./component/Palette-list";
import seedColors from "./seedColours";
import { generatePalette } from "./colorHelpers/colorHelpers.js";

class App extends React.Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
        exact
          path="/palette/:paletteId/:colorId"
          render={() => <h1>Single Colour Page</h1>}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
