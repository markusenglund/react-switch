import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.state = {
      left: props.checked ? props.width - props.height + 1 : 1,
      inTransition: false,
      startX: null,
      isDragging: false,
      focused: false
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

  handleDragStart(clientX) {
    const { inTransition } = this.state;
    if (inTransition) {
      return;
    }
    this.setState({ startX: clientX });
  }

  handleDrag(clientX) {
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

  handleMouseDown(event) {
    this.handleDragStart(event.clientX);
  }

  handleMouseMove(event) {
    this.handleDrag(event.clientX);
  }

  handleMouseUp() {
    this.handleDragStop();
  }

  handleTouchStart(event) {
    this.handleDragStart(event.touches[0].clientX);
  }

  handleTouchMove(event) {
    this.handleDrag(event.touches[0].clientX);
  }

  handleTouchEnd() {
    this.handleDragStop();
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
    const { left, isDragging, startX, focused } = this.state;
    const checkedLeft = width - height + 1;

    const backgroundStyle = {
      height,
      width,
      background: offColor,
      borderRadius: height / 2,
      display: 'inline-block',
      position: 'relative',
      opacity: disabled ? 0.5 : 1,
      WebkitTransition: 'all 0.2s',
      MozTransition: 'all 0.2s',
      transition: 'all 0.2s',
      cursor: disabled ? 'default' : 'pointer'
    };

    const foregroundStyle = {
      height,
      width,
      opacity: (left - 1) / (checkedLeft - 1),
      background: onColor,
      WebkitTransition: isDragging ? null : 'opacity 0.2s ease-out',
      MozTransition: isDragging ? null : 'opacity 0.2s ease-out',
      transition: isDragging ? null : 'opacity 0.2s ease-out',
      borderRadius: height / 2
    };

    const handleStyle = {
      height: height - 2,
      width: height - 2,
      background: startX ? activeHandleColor : handleColor,
      touchAction: 'none',
      WebkitTransition: isDragging ? null : 'left 0.2s ease-out',
      MozTransition: isDragging ? null : 'left 0.2s ease-out',
      transition: isDragging ? null : 'left 0.2s ease-out',
      display: 'inline-block',
      borderRadius: '50%',
      position: 'absolute',
      left,
      top: 1,
      border: 0,
      outline: 0,
      boxShadow: focused ? '0px 0px 1px 2px #4D90FE' : null
    };

    return (
      <div
        className={className}
        style={backgroundStyle}
      >
        {/* eslint-disable jsx-a11y/no-static-element-interactions */ }
        <div
          className="react-switch-fg"
          style={foregroundStyle}
          onClick={disabled ? null : this.handleClick}
        />
        {/* eslint-enable jsx-a11y/no-static-element-interactions */}
        <div
          role="checkbox"
          tabIndex={disabled ? null : 0}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onKeyDown={this.handleKeyDown}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          onTransitionEnd={this.handleTransitionEnd}
          className="react-switch-handle"
          style={handleStyle}
          id={id}
          name={name}
          value={value}
          aria-checked={checked}
          aria-disabled={disabled}
          aria-labelledby={ariaLabelledby}
          aria-label={ariaLabel}
        />
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
