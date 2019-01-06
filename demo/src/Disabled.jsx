import React from "react";
import Switch from "../..";

export default function DisabledSwitch() {
  return (
    <div className="example">
      <h2>Disabled switch</h2>
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
      <pre>
        {`
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
