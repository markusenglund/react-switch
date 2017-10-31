import React, { Component } from 'react';
import Switch from '../../dist';

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
        <h2>Simple usage</h2>
        <div className="switch-group">
          <label htmlFor="normal-switch">
            <span>Switch with default style</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              className="react-switch"
              id="normal-switch"
            />
          </label>
        </div>
        <p>The switch is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
        <pre>{`
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
        <h2>Simple usage</h2>
        <div className="switch-group">
          <label htmlFor="normal-switch">
            <span>Switch with default style</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              className="react-switch"
              id="normal-switch"
            />
          </label>
        </div>
        <p>The switch is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
      </div>
    );
  }
}

/* styles.css */

.switch-group label {
  vertical-align: middle;
}
.react-switch {
  vertical-align: middle;
  margin-left: 3px;
}
        `}
        </pre>
      </div>
    );
  }
}
