import React, { Component } from "react";
import Switch from "../..";

export default class InputProps extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  // eslint-disable-next-line class-methods-use-this
  onSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`Form submitted!`);
  }

  render() {
    return (
      <div className="example">
        <h2>Additional props</h2>
        <p>
          {`All additional props that are not part of the react-switch API will be passed on to the nested <input /> element. In this example, we passed it the 'required' attribute. Other examples are aria-*-attributes, tabIndex, name etc.`}
        </p>
        <form onSubmit={this.onSubmit}>
          <div>
            <small>Try to submit when the switch is not checked!</small>
          </div>
          <br />
          <Switch
            className="react-switch"
            onChange={this.handleChange}
            checked={this.state.checked}
            required
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <pre>
          {`
<Switch
  className="react-switch"
  onChange={this.handleChange}
  checked={this.state.checked}
  required
/>
        `}
        </pre>
      </div>
    );
  }
}
