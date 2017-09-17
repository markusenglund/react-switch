import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../src/styles.css';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.state = {
      left: props.checked ? 29 : 1
    };
  }

  componentWillReceiveProps({ checked }) {
    if (this.props.checked !== checked) {
      this.setState({ left: checked ? 29 : 1 });
    }
  }

  handleClick() {
    const { checked, onChange } = this.props;
    onChange(!checked);
  }

  handleDragStart({ clientX, dataTransfer }) {
    dataTransfer.setDragImage(document.createElement('DIV'), 0, 0);
    this.setState({ startX: clientX });
  }

  handleDrag({ clientX }) {
    if (!clientX) {
      return;
    }
    const { checked } = this.props;
    const { startX } = this.state;

    const startLeft = checked ? 29 : 1;
    const newLeft = startLeft + clientX - startX;
    const left = Math.min(29, Math.max(1, newLeft));
    this.setState({ left });
  }

  handleDragEnd() {
    const { checked, onChange } = this.props;
    const { left } = this.state;
    if (checked) {
      if (left > 15) {
        this.setState({ left: 29, startX: null });
      } else {
        onChange(false);
      }
    }
    if (!checked) {
      if (left < 15) {
        this.setState({ left: 1, startX: null });
      } else {
        onChange(true);
      }
    }
  }

  render() {
    const { checked } = this.props;
    const { left, startX } = this.state;
    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        className="react-switch"
        onClick={this.handleClick}
      >
        {/* eslint-enable jsx-a11y/no-static-element-interactions */}
        <span
          className="react-switch-bg"
          style={{ backgroundColor: checked ? 'green' : 'grey' }}
        />
        <button
          className="react-switch-toggle"
          style={{
            left,
            transition: startX ? null : 'left 0.2s ease-out'
          }}
          draggable
          onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          onDragEnd={this.handleDragEnd}
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
