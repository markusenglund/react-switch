import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { checkedIcon as defaultCheckedIcon, uncheckedIcon as defaultUncheckedIcon } from './icons';
import getBackgroundColor from './getBackgroundColor';

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
    this.handleTouchCancel = this.handleTouchCancel.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      pos: props.checked ? props.width - props.height + 1 : 1,
      startX: null,
      isDragging: false,
      hasOutline: false
    };
  }

  componentWillReceiveProps({ checked }) {
    const { width, height } = this.props;
    const checkedPos = width - height + 1;
    const pos = checked ? checkedPos : 1;
    this.setState({ pos });
  }

  handleDragStart(clientX) {
    this.setState({ startX: clientX, hasOutline: true });
  }

  handleDrag(clientX) {
    const { startX } = this.state;
    const { checked, width, height } = this.props;
    const checkedPos = width - height + 1;

    const startLeft = checked ? checkedPos : 1;
    const newLeft = startLeft + clientX - startX;
    const pos = Math.min(checkedPos, Math.max(1, newLeft));
    this.setState({ pos, isDragging: true });
  }

  handleDragStop() {
    const { pos, isDragging } = this.state;
    const { checked, onChange, width, height } = this.props;

    // Simulate clicking the handle
    if (!isDragging) {
      this.setState({ startX: null, hasOutline: false });
      onChange(!checked);
      return;
    }

    const checkedPos = width - height + 1;
    if (checked) {
      if (pos > (checkedPos + 1) / 2) {
        this.setState({ pos: checkedPos, startX: null, isDragging: false, hasOutline: false });
        return;
      }
      this.setState({ startX: null, isDragging: false, hasOutline: false });
      onChange(false);
      return;
    }
    if (pos < (checkedPos + 1) / 2) {
      this.setState({ pos: 1, startX: null, isDragging: false, hasOutline: false });
      return;
    }
    this.setState({ startX: null, isDragging: false, hasOutline: false });
    onChange(true);
  }

  handleMouseDown(event) {
    // Ignore right click and scroll
    if (typeof event.button === 'number' && event.button !== 0) { return; }

    this.handleDragStart(event.clientX);
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(event) {
    event.preventDefault();
    this.handleDrag(event.clientX);
  }

  handleMouseUp() {
    this.handleDragStop();
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  // TODO: Prevent mouse events from triggering on touch events.
  handleTouchStart(event) {
    this.handleDragStart(event.touches[0].clientX);
  }

  handleTouchMove(event) {
    this.handleDrag(event.touches[0].clientX);
  }

  handleTouchEnd(event) {
    event.preventDefault();
    this.handleDragStop();
  }

  handleTouchCancel() {
    this.setState({ startX: null, hasOutline: false });
  }

  handleClick() {
    const { checked, onChange } = this.props;
    onChange(!checked);
  }

  handleKeyDown(event) {
    const { checked, onChange } = this.props;
    const { isDragging } = this.state;
    // Trigger change on spacebar and enter keys (in violation of wai-aria spec).
    if ((event.keyCode === 32 || event.keyCode === 13) && !isDragging) {
      event.preventDefault();
      onChange(!checked);
    }
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
      checkedIcon,
      uncheckedIcon,
      boxShadow,
      height,
      width,
      id,
      'aria-labelledby': ariaLabelledby,
      'aria-label': ariaLabel
    } = this.props;
    const { pos, isDragging, startX, hasOutline } = this.state;
    const checkedPos = width - height + 1;

    const rootStyle = {
      position: 'relative',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      borderRadius: height / 2,
      WebkitTransition: 'opacity 0.2s',
      MozTransition: 'opacity 0.2s',
      transition: 'opacity 0.2s',
      width
    };

    const backgroundStyle = {
      height,
      width,
      position: 'relative',
      background: getBackgroundColor(pos, checkedPos, offColor, onColor),
      borderRadius: height / 2,
      WebkitTransition: 'background 0.2s',
      MozTransition: 'background 0.2s',
      transition: 'background 0.2s'
    };

    const checkedStyle = {
      opacity: (pos - 1) / (checkedPos - 1),
      width: Math.min(height, width - height + 2),
      height,
      pointerEvents: 'none',
      WebkitTransition: 'opacity 0.2s',
      MozTransition: 'opacity 0.2s',
      transition: 'opacity 0.2s'
    };

    const uncheckedStyle = {
      opacity: 1 - (pos - 1) / (checkedPos - 1),
      width: Math.min(height, width - height + 2),
      height,
      position: 'absolute',
      right: 0,
      top: 0,
      pointerEvents: 'none',
      WebkitTransition: 'opacity 0.2s',
      MozTransition: 'opacity 0.2s',
      transition: 'opacity 0.2s'
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
      left: pos,
      top: 1,
      border: 0,
      outline: 0,
      boxShadow: hasOutline ? boxShadow : null
    };

    return (
      <div className={className} style={rootStyle}>
        <div
          className="react-switch-bg"
          style={backgroundStyle}
          onClick={disabled ? null : this.handleClick}
        >
          {checkedIcon ?
            (
              <div style={checkedStyle}>
                {checkedIcon}
              </div>
            ) : null
          }
          {uncheckedIcon ?
            (
              <div style={uncheckedStyle}>
                {uncheckedIcon}
              </div>
            ) : null
          }
        </div>
        <div
          className="react-switch-handle"
          role="checkbox"
          tabIndex={disabled ? null : 0}
          onMouseDown={disabled ? null : this.handleMouseDown}
          onTouchStart={disabled ? null : this.handleTouchStart}
          onTouchMove={disabled ? null : this.handleTouchMove}
          onTouchEnd={disabled ? null : this.handleTouchEnd}
          onTouchCancel={disabled ? null : this.handleTouchCancel}
          onKeyDown={this.handleKeyDown}
          onFocus={() => this.setState({ hasOutline: true })}
          onBlur={() => this.setState({ hasOutline: false })}
          onTransitionEnd={this.handleTransitionEnd}
          style={handleStyle}
          id={id}
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
  checkedIcon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ]),
  uncheckedIcon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ]),
  boxShadow: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  id: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string
};

Switch.defaultProps = {
  disabled: false,
  offColor: '#808080',
  onColor: '#008000',
  handleColor: 'white',
  activeHandleColor: '#ddd',
  checkedIcon: defaultCheckedIcon,
  uncheckedIcon: defaultUncheckedIcon,
  boxShadow: '0px 0px 1px 2px #4D90FE',
  height: 28,
  width: 56,
  className: null,
  id: null,
  'aria-labelledby': null,
  'aria-label': null
};

export default Switch;
