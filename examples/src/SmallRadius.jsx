import React, { Component } from "react";
import Switch from "../../dist";

export default class SmallRadiusSwitch extends Component {
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
        <h2>Small handle</h2>
        <label htmlFor="small-radius-switch">
          <span>Switch with small handle radius</span>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            handleDiameter={28}
            offColor="#08f"
            onColor="#0ff"
            offHandleColor="#0ff"
            onHandleColor="#08f"
            height={40}
            width={70}
            className="react-switch"
            id="small-radius-switch"
          />
        </label>
        <pre>
          {`
<label htmlFor="small-radius-switch">
  <span>Switch with small handle radius</span>
  <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    handleDiameter={28}
    offColor="#08f"
    onColor="#0ff"
    offHandleColor="#0ff"
    onHandleColor="#08f"
    height={40}
    width={70}
    className="react-switch"
    id="small-radius-switch"
  />
</label>
          `}
        </pre>
      </div>
    );
  }
}
