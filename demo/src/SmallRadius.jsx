import React, { Component } from "react";
import Switch from "../..";

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
        <h2>Customized style</h2>
        <label htmlFor="small-radius-switch">
          <span>
            Thick switch with smaller handle size and custom border radius
          </span>
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
            borderRadius={6}
            className="react-switch"
            id="small-radius-switch"
          />
        </label>
        <pre>
          {`
<label htmlFor="small-radius-switch">
  <span>
    Thick switch with smaller handle size and custom border radius
  </span>
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
    borderRadius={6}
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
