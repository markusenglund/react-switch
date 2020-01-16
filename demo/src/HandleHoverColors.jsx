import React, { Component } from "react";
import Switch from "../..";

export default class HandleHoverColors extends Component {
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
        <h2>Custom hover colors for switch handle</h2>
        <label htmlFor="handle-hover-colors">
          <span>See the colors change when mouse hovers over the switch</span>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onHoverHandleColor="#005500"
            offHoverHandleColor="#3C3C3C"
            className="react-switch"
            id="handle-hover-colors"
          />
        </label>
        <pre>
          {`
<label htmlFor="handle-hover-colors">
  <span>See the colors change when mouse hovers over the switch</span>
  <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    onHoverHandleColor="#005500"
    offHoverHandleColor="#3C3C3C"
    className="react-switch"
    id="handle-hover-colors"
  />
</label>
          `}
        </pre>
      </div>
    );
  }
}
