import React, { Component } from "react";
import Switch from "../..";

export default class HandleIcon extends Component {
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
        <h2>Handle icons</h2>
        <label htmlFor="handle-icons">
          <span>Switch with handle icons</span>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
            uncheckedIcon={false}
            checkedIcon={false}
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 20
                }}
              >
                ☹
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  color: "red",
                  fontSize: 18
                }}
              >
                ♥
              </div>
            }
            id="handle-icons"
          />
        </label>
        <pre>
          {`
<label htmlFor="handle-icons">
<span>Switch with handle icons</span>
<Switch
  onChange={this.handleChange}
  checked={this.state.checked}
  className="react-switch"
  uncheckedIcon={false}
  checkedIcon={false}
  uncheckedHandleIcon={
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 20
      }}
    >
      ☹
    </div>
  }
  checkedHandleIcon={
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        color: "red",
        fontSize: 18
      }}
    >
      ♥
    </div>
  }
  id="handle-icons"
/>
</label>
        `}
        </pre>
      </div>
    );
  }
}
