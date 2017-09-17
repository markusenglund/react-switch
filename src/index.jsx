import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../src/styles.css';

class Switch extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { checked, onChange } = this.props;
    onChange(!checked);
    // console.log(onChange, checked);
  }

  render() {
    const { checked } = this.props;
    return (
      <div
        className="react-switch"
        onClick={this.handleClick}
      >
        <span
          className="react-switch-bg"
          style={{ backgroundColor: checked ? 'green' : 'grey' }}
        />
        <button
          className="react-switch-toggle"
          style={{
            left: checked ? '29px' : '1px'
          }}
        />
      </div>
    );
  }
}
Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Switch;
