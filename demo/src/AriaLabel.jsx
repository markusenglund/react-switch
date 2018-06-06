import React, { Component } from "react";
import Switch from "../../";

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
        <h2>Switch with invisible label only readable by screen readers</h2>
        <Switch
          className="react-switch"
          onChange={this.handleChange}
          checked={this.state.checked}
          aria-label="super secret label that is not visible"
        />
        <pre>
          {`
<Switch
  className="react-switch"
  onChange={this.handleChange}
  checked={this.state.checked}
  aria-label="super secret label that is not visible"
/>
        `}
        </pre>
      </div>
    );
  }
}
