import React, {useState} from "react";
import Switch from "../..";

export default function HorizontalSwitch () {
  const [checked, setChecked] = useState();
  const checkedClassName = "horizontal-switch__selector";
  const uncheckedClassName = "horizontal-switch__selector horizontal-switch__selector_hide";

  return (
    <div className="example">
      <h2>Horizontal switch</h2>
      <p>
        Just set height more than weight.
      </p>
      <label className="horizontal-switch">
        <Switch
          onChange={setChecked}
          checked={checked}
          width={12}
          height={56}
          handleDiameter={30}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          checkedIcon=""
          uncheckedIcon=""
          onColor='gray'
          checkedHandleIcon="💸"
          uncheckedHandleIcon="💳"
          className="react-switch"
        />
        <span className="horizontal-switch__selectors">
          <span className={checked ? uncheckedClassName : checkedClassName}>Credit Card</span>
          <span className={checked ? checkedClassName : uncheckedClassName}>Cash Money</span>
        </span>
      </label>
      <pre>
        {`
function HorizontalSwitch () {
  const [checked, setChecked] = useState();
  const checkedClassName = "horizontal-switch__selector";
  const uncheckedClassName = "horizontal-switch__selector horizontal-switch__selector_hide";

  return (
    <label className="horizontal-switch">
        <Switch
          onChange={setChecked}
          checked={checked}
          width={12}
          height={56}
          handleDiameter={30}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          checkedIcon=""
          uncheckedIcon=""
          onColor='gray'
          checkedHandleIcon="💸"
          uncheckedHandleIcon="💳"
          className="react-switch"
        />
        <span className="horizontal-switch__selectors">
          <span className={checked ? uncheckedClassName : checkedClassName}>Credit Card</span>
          <span className={checked ? checkedClassName : uncheckedClassName}>Cash Money</span>
        </span>
      </label>
  );
}`}
      </pre>
    </div>
  );
}
