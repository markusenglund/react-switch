import React, { Component } from 'react';
import Switch from '../../dist';

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
        <div className="switch-group">
          <label htmlFor="icon-switch">Switch with custom icons</label>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            uncheckedIcon={(
              <div style={{ paddingTop: 5, paddingLeft: 3, fontSize: 14 }}>
                Off
              </div>
            )}
            checkedIcon={(
              <div style={{ color: 'pink', paddingTop: 2, paddingLeft: 6, fontSize: 20 }}>
                ❤
              </div>
            )}
            className="react-switch"
            id="icon-switch"
          />
        </div>
        <pre>{`
<label htmlFor="icon-switch">Switch with custom icons</label>
<Switch
  checked={this.state.checked}
  onChange={this.handleChange}
  uncheckedIcon={(
    <svg viewBox="-6 -5 14 20" height="100%" width="100%">
      <rect width="2" height="10" fill="#227" />
    </svg>
  )}
  checkedIcon={(
    <div style={{ color: 'pink', paddingTop: 2, paddingLeft: 6, fontSize: 20 }}>
      ❤
    </div>
  )}
  className="react-switch"
  id="icon-switch"
/>
        `}
        </pre>
      </div>
    );
  }
}
