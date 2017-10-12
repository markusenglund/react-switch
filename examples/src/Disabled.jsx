import React from 'react';
import Switch from '../../dist';

export default function DisabledSwitch() {
  return (
    <div className="example">
      <h2>Disabled switch</h2>
      <div className="switch-group">
        <label htmlFor="disabled-switch">You can not click, drag or tab to it</label>
        <Switch
          onChange={() => {}}
          checked
          disabled
          className="react-switch"
          id="disabled-switch"
        />
      </div>
      <pre>{`
<label htmlFor="disabled-switch">You can not click, drag or tab to it</label>
<Switch
onChange={this.handleChange}
checked={this.state.checked}
disabled
className="react-switch"
id="disabled-switch"
/>
      `}
      </pre>
    </div>
  );
}
