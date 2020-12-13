import React, { useState } from "react";
import Switch from "../..";

const AsynchronousStateExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="example">
      <h2>Random checked state</h2>
      <label>
        <span>
          This example illustrates how the switch handles when the state is not
          changed in response to user action
        </span>
        <Switch
          onChange={() => setChecked(Math.random() < 0.5)}
          checked={checked}
          className="react-switch"
        />
      </label>
      <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p>
    </div>
  );
};

export default AsynchronousStateExample;
