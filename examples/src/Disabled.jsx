import React from 'react';
import Switch from '../../dist';

export default function DisabledSwitch() {
  return (
    <div className="example">
      <h2>Disabled switch</h2>
      <div className="switch-group">
        <label htmlFor="disabled-switch">
          <span>You can not click, drag or tab to it</span>
          <Switch
            onChange={() => {}}
            checked
            disabled
            className="react-switch"
            id="disabled-switch"
          />
        </label>
      </div>
      <pre>{`
<label htmlFor="disabled-switch">
  <span>You can not click, drag or tab to it</span>
  <Switch
    onChange={() => {}}
    checked
    disabled
    className="react-switch"
    id="disabled-switch"
  />
</label>
      `}
      </pre>
    </div>
  );
}
