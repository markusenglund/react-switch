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
        <h2>Outline usage</h2>
        <label>
          <span>Switch with outline style</span>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
            disableBackground={true}
            backgroundBorderStyle="2px solid red"
            handleDiameter={20}
            onColor="#ff0000"
            onHandleColor="#ff0000"
            offColor="#aaa"
            offHandleColor="#aaa"
          />
        </label>
        <p>
          The switch is <span>{this.state.checked ? "on" : "off"}</span>.
        </p>
        <pre>
          {`
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
        <h2>Outline usage</h2>
        <label>
          <span>Switch with outline style</span>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
            disableBackground={true}
            backgroundBorderStyle="2px solid red"
            handleDiameter={20}
            onColor="#ff0000"
            onHandleColor="#ff0000"
            offColor="#aaa"
            offHandleColor="#aaa"
          />
        </label>
        <p>The switch is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
      </div>
    );
  }
}

/* styles.css */

.react-switch {
  vertical-align: middle;
  margin-left: 4px;
}
        `}
        </pre>
      </div>
    );
  }
}
