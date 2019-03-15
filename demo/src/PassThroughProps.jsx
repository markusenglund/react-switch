import React, { Component } from 'react'
import Switch from "../..";

export default class InputProps extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  onSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`Cool, right? 😎`);
  }

  handleChange(checked) {
    this.setState({ checked });
  }


  render() {
    return (
      <div className="example">
        <h2>Pass through props</h2>
        <p>
          {`Switch will pass all of the extra props that are not part of react-switch API to the underline <input /> element
            For example, we passed the "required" attribute to the underline input.
          `}
        </p>
        <form onSubmit={this.onSubmit}>
          <div>
            <small>Try to submit when the switch is not checked</small>
          </div>
          <br/>
          <Switch
            className="react-switch"
            onChange={this.handleChange}
            checked={this.state.checked}
            required
          />
          <br/>
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
