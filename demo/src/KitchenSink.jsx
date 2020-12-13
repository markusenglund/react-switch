import React, { Component } from "react";
import Switch from "../..";

export default class KitchenSinkSwitch extends Component {
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
        <h2>The kitchen sink</h2>
        <label htmlFor="small-radius-switch">
          <span>A switch with all available styling options</span>
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            handleDiameter={28}
            offColor="#08f"
            onColor="#0ff"
            offHandleColor="#0ff"
            onHandleColor="#08f"
            height={40}
            width={70}
            borderRadius={6}
            boxShadow="0px 0px 1px 2px #fffc35"
            activeBoxShadow="0px 0px 1px 10px grey"
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2
                }}
              >
                Off
              </div>
            }
            checkedIcon={
              <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
                <circle r={3} cx={5} cy={5} />
              </svg>
            }
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 20
                }}
              >
                ☹
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  color: "red",
                  fontSize: 18
                }}
              >
                ♥
              </div>
            }
            className="react-switch"
            id="small-radius-switch"
          />
        </label>
        <pre>
          {`
<label htmlFor="small-radius-switch">
  <span>A switch all available styling options</span>
  <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    handleDiameter={28}
    offColor="#08f"
    onColor="#0ff"
    offHandleColor="#0ff"
    onHandleColor="#08f"
    height={40}
    width={70}
    borderRadius={6}
    boxShadow="0px 0px 1px 2px #fffc35"
    activeBoxShadow="0px 0px 1px 10px grey"
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "orange",
          paddingRight: 2
        }}
      >
        Off
      </div>
    }
    checkedIcon={
      <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
        <circle r={3} cx={5} cy={5} />
      </svg>
    }
    uncheckedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 20
        }}
      >
        ☹
      </div>
    }
    checkedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "red",
          fontSize: 18
        }}
      >
        ♥
      </div>
    }
    className="react-switch"
    id="small-radius-switch"
  />
</label>
          `}
        </pre>
      </div>
    );
  }
}
