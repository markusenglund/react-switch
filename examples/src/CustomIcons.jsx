import React, { Component } from "react";
import Switch from "../../dist";

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
                  fontSize: 13
                }}
              >
                Off
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  color: "pink",
                  fontSize: 20
                }}
              >
                ❤
              </div>
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
        fontSize: 13
      }}
    >
      Off
    </div>
  }
  checkedIcon={
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        color: "pink",
        fontSize: 20
      }}
    >
      ❤
    </div>
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
