import React, { Component } from "react";
import Switch from "../..";

export default class BackgroundHoverColors extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="example">
        <h2>Custom hover colors for switch background</h2>
        <label htmlFor="background-hover-colors">
          <span>See the colors change when mouse hovers over the switch</span>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onHoverColor="#005500"
            offHoverColor="#3C3C3C"
            className="react-switch"
            id="background-hover-colors"
          />
        </label>
        <pre>
          {`
<label htmlFor="background-hover-colors">
  <span>See the colors change when mouse hovers over the switch</span>
  <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    onHoverColor="#005500"
    offHoverColor="#3C3C3C"
    className="react-switch"
    id="background-hover-colors"
  />
</label>
          `}
        </pre>
      </div>
    );
  }
}
