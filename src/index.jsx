import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import '../styles.css';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      left: props.checked ? props.width - props.height + 1 : 1,
      inTransition: false,
      startX: null,
      isDragging: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { left } = this.state;
    const { width, height } = this.props;
    const checkedLeft = width - height + 1;
    const newLeft = nextProps.checked ? checkedLeft : 1;
    /* !IMPORTANT: Don't set inTransition to true if the new and old left-position
    is the same since this will not trigger the transition */
    if (left !== newLeft) {
      this.setState({
        left: newLeft,
        inTransition: true
      });
    }
  }

  handleClick() {
    const { checked, onChange } = this.props;
    onChange(!checked);
  }

  handleKeyDown(event) {
    const { checked, onChange } = this.props;
    const { isDragging } = this.state;
    // Trigger change only on spacebar key in accordance with wai-aria spec
    if (event.keyCode === 32 && !isDragging) {
      event.preventDefault();
      onChange(!checked);
    }
  }

  handleDragStart(event) {
    const { inTransition } = this.state;
    if (inTransition) {
      return;
    }
    const clientX = event.clientX || event.touches[0].clientX;
    this.setState({ startX: clientX });
  }

  handleDrag(event) {
    const clientX = event.clientX || event.touches[0].clientX;
    const { checked, width, height } = this.props;
    const { startX } = this.state;
    const checkedLeft = width - height + 1;

    const startLeft = checked ? checkedLeft : 1;
    const newLeft = startLeft + clientX - startX;
    const left = Math.min(checkedLeft, Math.max(1, newLeft));
    this.setState({ left, isDragging: true });
  }

  handleDragStop() {
    const { left, isDragging, inTransition } = this.state;
    if (inTransition) {
      return;
    }
    const { checked, onChange, width, height } = this.props;

    // Simulate clicking the handle
    if (!isDragging) {
      this.setState({ startX: null });
      onChange(!checked);
      return;
    }

    const checkedLeft = width - height + 1;
    if (checked) {
      if (left > (checkedLeft + 1) / 2) {
        this.setState({ left: checkedLeft, startX: null, isDragging: false });
        return;
      }
      this.setState({ startX: null, isDragging: false });
      onChange(false);
      return;
    }
    if (left < (checkedLeft + 1) / 2) {
      this.setState({ left: 1, startX: null, isDragging: false });
      return;
    }
    this.setState({ startX: null, isDragging: false });
    onChange(true);
  }

  handleTransitionEnd() {
    this.setState({ inTransition: false });
  }

  render() {
    const {
      checked,
      disabled,
      className,
      offColor,
      onColor,
      handleColor,
      activeHandleColor,
      height,
      width,
      id,
      name,
      value,
      'aria-labelledby': ariaLabelledby,
      'aria-label': ariaLabel
    } = this.props;
    const { left, isDragging, startX } = this.state;
    const checkedLeft = width - height + 1;

    return (
      <div
        className={className}
        style={{
          height,
          width,
          background: offColor,
          borderRadius: height / 2,
          display: 'inline-block',
          position: 'relative',
          opacity: disabled ? 0.5 : 1,
          WebkitTransition: 'all 0.2s',
          MozTransition: 'all 0.2s',
          transition: 'all 0.2s'
        }}
      >
        {/* eslint-disable jsx-a11y/no-static-element-interactions */ }
        <div
          className="react-switch-fg"
          style={{
            height,
            width,
            opacity: (left - 1) / (checkedLeft - 1),
            background: onColor,
            WebkitTransition: isDragging ? null : 'opacity 0.2s ease-out',
            MozTransition: isDragging ? null : 'opacity 0.2s ease-out',
            transition: isDragging ? null : 'opacity 0.2s ease-out',
            borderRadius: height / 2,
            cursor: disabled ? 'default' : 'pointer'
          }}
          onClick={disabled ? null : this.handleClick}
        />
        {/* eslint-enable jsx-a11y/no-static-element-interactions */}
        <DraggableCore
          onStart={this.handleDragStart}
          onDrag={this.handleDrag}
          onStop={this.handleDragStop}
          disabled={disabled}
        >
          <div
            role="checkbox"
            tabIndex={disabled ? null : 0}
            aria-checked={checked}
            aria-disabled={disabled}
            onTransitionEnd={this.handleTransitionEnd}
            onKeyDown={this.handleKeyDown}
            className="react-switch-handle"
            style={{
              left,
              height: height - 2,
              width: height - 2,
              background: startX ? activeHandleColor : handleColor,
              WebkitTransition: isDragging ? null : 'left 0.2s ease-out',
              MozTransition: isDragging ? null : 'left 0.2s ease-out',
              transition: isDragging ? null : 'left 0.2s ease-out',
              cursor: disabled ? 'default' : null
            }}
            id={id}
            name={name}
            value={value}
            aria-labelledby={ariaLabelledby}
            aria-label={ariaLabel}
          />
        </DraggableCore>
      </div>
    );
  }
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  offColor: PropTypes.string,
  onColor: PropTypes.string,
  handleColor: PropTypes.string,
  activeHandleColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string

};

Switch.defaultProps = {
  disabled: false,
  offColor: 'grey',
  onColor: 'green',
  handleColor: 'white',
  activeHandleColor: '#ddd',
  height: 28,
  width: 56,
  className: null,
  id: null,
  name: null,
  value: null,
  'aria-labelledby': null,
  'aria-label': null
};

export default Switch;
