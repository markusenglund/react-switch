import React, { Component } from 'react';
import { render } from 'react-dom';
import Switch from '../../dist';
import './styles.css';

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
        <div className="example">
          <h2>Simple usage</h2>
          <div className="switch-group">
            <label htmlFor="normal-switch">Switch with default style</label>
            <Switch
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              id="normal-switch"
            />
          </div>
          <p>The switch is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
          <pre>{`
constructor() {
  super();
  this.state = {
    checked: false
  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(checked) {
  this.setState({ checked });
}
          `}
          </pre>
          <pre>
            {`
<label htmlFor="normal-switch">Switch with default style</label>
<Switch
  onChange={this.handleChange}
  checked={this.state.checked}
  id="normal-switch"
/>
            `}
          </pre>
        </div>

        <div className="example">
          <h2>Custom color, size and no icons</h2>
          <div className="switch-group">
            <label htmlFor="custom-switch">Switch with custom style</label>
            <Switch
              id="custom-switch"
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              height={24}
              width={290}
              handleColor="orange"
              activeHandleColor="yellow"
              /* uncheckedIcon={false} */
              /* checkedIcon={false} */
              boxShadow="0px 0px 1px 2px #000"
              offColor="#dddddd"
              onColor="#3d9dfd"
            />
          </div>
          <pre>
            {`
<label htmlFor="custom-switch">Switch with custom style</label>
<Switch
  id="custom-switch"
  className="react-switch"
  onChange={this.handleChange}
  checked={this.state.checked}
  height={20}
  width={90}
  handleColor="orange"
  activeHandleColor="yellow"
  uncheckedIcon={false}
  checkedIcon={false}
  boxShadow="0px 0px 1px 2px #000"
  offColor="linear-gradient(45deg, steelblue, black)"
  onColor="repeating-radial-gradient(ellipse farthest-corner, darkgreen, lightgreen)"
/>
            `}
          </pre>
        </div>

        <div className="example">
          <h2>Custom icon</h2>
          <div className="switch-group">
            <label htmlFor="icon-switch">Switch with a custom icon for when it is checked</label>
            <Switch
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              id="icon-switch"
              offColor="#008000"
              onColor="#ffffff"
              checkedIcon={(
                <div style={{ color: 'pink', paddingTop: 2, paddingLeft: 4, fontSize: 20 }}>
                  ❤
                </div>
              )}
            />
          </div>
          <pre>{`
<label htmlFor="icon-switch">Switch with a custom icon for when it is checked</label>
<Switch
  className="react-switch"
  onChange={this.handleChange}
  checked={this.state.checked}
  id="icon-switch"
  checkedIcon={(
    <div style={{ color: 'pink', paddingTop: 2, paddingLeft: 4, fontSize: 20 }}>
      ❤
    </div>
  )}
/>
</div>
          `}
          </pre>
        </div>

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
