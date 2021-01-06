import React, { useState } from "react";
import Switch from "../..";

const OnlyTurnedOn = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="example">
      <h2>Switch which cannot be turned back off</h2>
      <label>
        <span>
          To illustrate how the switch handles when the state is not changed in
          response to user action
        </span>
        <Switch
          onChange={() => setChecked(true)}
          checked={checked}
          className="react-switch"
        />
      </label>
      <pre>
        {`
<Switch
  onChange={() => setChecked(true)}
  checked={checked}
  className="react-switch"
/>
        `}
      </pre>
    </div>
  );
};

export default OnlyTurnedOn;
