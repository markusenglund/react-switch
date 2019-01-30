import React, { Component } from "react";
import Switch from "../..";

export default class BasicExample extends Component {
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
        <h2>Switch using aria-labelledby</h2>
        <p id="neat-label">
          Use this if you do not want clicking on the label to cause the switch
          to toggle.
        </p>
        <Switch
          className="react-switch"
          onChange={this.handleChange}
          checked={this.state.checked}
          aria-labelledby="neat-label"
        />
        <pre>
          {`
<p id="neat-label">Use this if you do not want clicking on the label to cause the switch to toggle.</p>
<Switch
  className="react-switch"
  onChange={this.handleChange}
  checked={this.state.checked}
  aria-labelledby="neat-label"
/>
        `}
        </pre>
      </div>
    );
  }
}
