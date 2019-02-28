import React from "react";
import { render } from "react-dom";
import "./styles.css";
import BasicExample from "./BasicExample";
import OutlineExample from "./OutlineExample";
import MaterialDesign from "./MaterialDesign";
import SmallRadius from "./SmallRadius";
import CustomIcons from "./CustomIcons";
import Disabled from "./Disabled";
import AriaLabelledby from "./AriaLabelledby";
import AriaLabel from "./AriaLabel";

function Examples() {
  return (
    <div id="examples">
      <h1>React Switch</h1>
      <BasicExample />
      <MaterialDesign />
      <SmallRadius />
      <CustomIcons />
      <Disabled />
      <OutlineExample />
      <AriaLabelledby />
      <AriaLabel />
      <p>
        The full source code for this page can be found&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/markusenglund/react-switch/tree/master/demo/src"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

render(<Examples />, document.getElementById("app"));
