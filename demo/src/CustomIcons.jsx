import React, { Component } from "react";
import Switch from "../..";

export default class CustomIconSwitch extends Component {
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
        <h2>Custom icons</h2>
        <label htmlFor="icon-switch">
          <span>Switch with custom icons</span>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2
                }}
              >
                Off
              </div>
            }
            checkedIcon={
              <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
                <circle r={3} cx={5} cy={5} />
              </svg>
            }
            className="react-switch"
            id="icon-switch"
          />
        </label>
        <pre>
          {`
<label htmlFor="icon-switch">
  <span>Switch with custom icons</span>
  <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "orange",
          paddingRight: 2
        }}
      >
        Off
      </div>
    }
    checkedIcon={
      <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
        <circle r={3} cx={5} cy={5} />
      </svg>
    }
    className="react-switch"
    id="icon-switch"
  />
</label>
        `}
        </pre>
      </div>
    );
  }
}
