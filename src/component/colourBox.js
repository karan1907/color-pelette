import React, { Component } from "react";
import "./colorBox.css";

class colourBox extends Component {
  state = {};
  render() {
    return (
      <div style={{ background: this.props.background }} className="ColorBox">
        <span>{this.props.name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default colourBox;
