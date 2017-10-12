import React, { Component } from 'react';
import Switch from '../../dist';

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
        <div className="switch-group">
          <label htmlFor="small-radius-switch">Switch with small handle radius</label>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            handleDiameter={28}
            offColor="#0088ff"
            onColor="#00ffff"
            offHandleColor="#00ffff"
            onHandleColor="#0088ff"
            height={40}
            width={70}
            className="react-switch"
            id="small-radius-switch"
          />
        </div>
        <pre>
          {`
<label htmlFor="small-radius-switch">Switch with small handle radius</label>
<Switch
  checked={this.state.checked}
  onChange={this.handleChange}
  handleDiameter={28}
  offColor="#0088ff"
  onColor="#00ffff"
  offHandleColor="#00ffff"
  onHandleColor="#0088ff"
  height={40}
  width={70}
  className="react-switch"
  id="small-radius-switch"
/>
          `}
        </pre>
      </div>
    );
  }
}
