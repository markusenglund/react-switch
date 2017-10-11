import React, { Component } from 'react';
import { render } from 'react-dom';
import Switch from '../../dist';
import './styles.css';
import BasicExample from './BasicExample';
import MaterialDesign from './MaterialDesign';
import SmallRadius from './SmallRadius';
import CustomIcons from './CustomIcons';

class Examples extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      disabledChecked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDisabledChange = this.handleDisabledChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleDisabledChange(checked) {
    this.setState({ disabledChecked: checked });
  }

  render() {
    return (
      <div id="examples">
        <h1>React Switch</h1>
        <BasicExample />
        <MaterialDesign />
        <SmallRadius />
        <CustomIcons />
        <div className="example">
          <h2>Disabled switch</h2>
          <div className="switch-group">
            <label htmlFor="disabled-switch">Toggle another switch to disable this switch</label>
            <Switch
              className="react-switch"
              onChange={this.handleDisabledChange}
              disabled={this.state.checked}
              checked={this.state.disabledChecked}
              id="disabled-switch"
            />
          </div>
          <pre>{`
<label htmlFor="disabled-switch">Toggle another switch to disable this switch</label>
<Switch
  className="react-switch"
  onChange={this.handleDisabledChange}
  disabled={this.state.checked}
  checked={this.state.disabledChecked}
  id="disabled-switch"
/>
            `}
          </pre>
        </div>
        <div className="example">
          <h2>Switch using aria-labelledby</h2>
          <div className="switch-group">
            <p id="neat-label">Great fantastic label, everyone says it is the best.</p>
            <Switch
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              aria-labelledby="neat-label"
            />
          </div>
          <pre>{`
<p id="neat-label">Great fantastic label, everyone says it's the best.</p>
<Switch
  className="react-switch"
  onChange={this.handleChange}
  checked={this.state.checked}
  aria-labelledby="neat-label"
/>      
            `}
          </pre>
        </div>
        <div className="example">
          <h2>Switch with clickable label</h2>
          <div className="switch-group">
            {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
            <label
              htmlFor="clickable-label-switch"
              onClick={() => this.handleChange(!this.state.checked)}
            >
              {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
              You have to add a clickhandler yourself
            </label>
            <Switch
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              id="clickable-label-switch"
            />
          </div>
          <pre>{`
<label
  htmlFor="clickable-label-switch"
  onClick={() => this.handleChange(!this.state.checked)}
>
  You have to add a clickhandler yourself
</label>
<Switch
  className="react-switch"
  onChange={this.handleChange}
  checked={this.state.checked}
  id="clickable-label-switch"
/>   
            `}
          </pre>
        </div>
        <div>
          <h2>Switch with invisible label only readable by screen readers</h2>
          <div className="switch-group">
            <Switch
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              aria-label="super secret label that is not visible"
            />
          </div>
          <pre>{`
  <Switch
    className="react-switch"
    onChange={this.handleChange}
    checked={this.state.checked}
    aria-label="super secret label that is not visible"
  />  
            `}
          </pre>
        </div>
        <p>The full source code for this page can be found <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yogaboll/react-switch/tree/master/examples/src"
        >here
        </a>.</p>
      </div>
    );
  }
}

render(
  <Examples />,
  document.getElementById('app')
);
