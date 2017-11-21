import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { checkedIcon as defaultCheckedIcon, uncheckedIcon as defaultUncheckedIcon } from './icons';
import getBackgroundColor from './getBackgroundColor';

class Switch extends Component {
  constructor(props) {
    super(props);
    const { height, width, handleDiameter, checked } = props;
    this.handleDiameter = handleDiameter || height - 2;
    this.checkedPos = Math.max(width - height, width - (height + this.handleDiameter) / 2);
    this.uncheckedPos = Math.max(0, (height - this.handleDiameter) / 2);
    this.state = {
      pos: checked ? this.checkedPos : this.uncheckedPos,
      startX: null,
      isDragging: false,
      hasOutline: false
    };
  }

  componentWillReceiveProps({ checked }) {
    const pos = checked ? this.checkedPos : this.uncheckedPos;
    this.setState({ pos });
  }

  handleDragStart = (clientX) => {
    this.setState({ startX: clientX, hasOutline: true });
  }

  handleDrag = (clientX) => {
    const { startX } = this.state;
    const { checked } = this.props;
    const startPos = checked ? this.checkedPos : this.uncheckedPos;
    const newPos = startPos + clientX - startX;
    const pos = Math.min(this.checkedPos, Math.max(this.uncheckedPos, newPos));
    this.setState({ pos, isDragging: true });
  }

  handleDragStop = (event) => {
    const { pos, isDragging } = this.state;
    const { checked, onChange } = this.props;

    // Simulate clicking the handle
    if (!isDragging) {
      this.setState({ startX: null, hasOutline: false });
      onChange(!checked, event);
      return;
    }
    if (checked) {
      if (pos > (this.checkedPos + this.uncheckedPos) / 2) {
        this.setState({ pos: this.checkedPos, startX: null, isDragging: false, hasOutline: false });
        return;
      }
      this.setState({ startX: null, isDragging: false, hasOutline: false });
      onChange(false, event);
      return;
    }
    if (pos < (this.checkedPos + this.uncheckedPos) / 2) {
      this.setState({ pos: this.uncheckedPos, startX: null, isDragging: false, hasOutline: false });
      return;
    }
    this.setState({ startX: null, isDragging: false, hasOutline: false });
    onChange(true, event);
  }

  handleMouseDown = (event) => {
    // Ignore right click and scroll
    if (typeof event.button === 'number' && event.button !== 0) { return; }

    this.handleDragStart(event.clientX);
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = (event) => {
    event.preventDefault();
    this.handleDrag(event.clientX);
  }

  handleMouseUp = (event) => {
    this.handleDragStop(event);
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleTouchStart = (event) => {
    this.handleDragStart(event.touches[0].clientX);
  }

  handleTouchMove = (event) => {
    this.handleDrag(event.touches[0].clientX);
  }

  handleTouchEnd = (event) => {
    event.preventDefault();
    this.handleDragStop(event);
  }

  handleTouchCancel = () => {
    this.setState({ startX: null, hasOutline: false });
  }

  handleClick = (event) => {
    const { checked, onChange } = this.props;
    onChange(!checked, event);
  }

  handleKeyDown = (event) => {
    const { checked, onChange } = this.props;
    const { isDragging } = this.state;
    // Trigger change on spacebar and enter keys (in violation of wai-aria spec).
    if ((event.keyCode === 32 || event.keyCode === 13) && !isDragging) {
      event.preventDefault();
      onChange(!checked, event);
    }
  }

  render() {
    const {
      checked,
      disabled,
      className,
      offColor,
      onColor,
      offHandleColor,
      onHandleColor,
      checkedIcon,
      uncheckedIcon,
      boxShadow,
      activeBoxShadow,
      height,
      width,
      id,
      'aria-labelledby': ariaLabelledby,
      'aria-label': ariaLabel
    } = this.props;

    const { pos, isDragging, hasOutline } = this.state;

    const rootStyle = {
      position: 'relative',
      display: 'inline-block',
      opacity: disabled ? 0.5 : 1,
      borderRadius: height / 2,
      WebkitTransition: 'opacity 0.25s',
      MozTransition: 'opacity 0.25s',
      transition: 'opacity 0.25s'
    };

    const backgroundStyle = {
      height,
      width,
      margin: Math.max(0, (this.handleDiameter - height) / 2),
      position: 'relative',
      cursor: disabled ? 'default' : 'pointer',
      background: getBackgroundColor(pos, this.checkedPos, this.uncheckedPos, offColor, onColor),
      borderRadius: height / 2,
      WebkitTransition: isDragging ? null : 'background 0.25s',
      MozTransition: isDragging ? null : 'background 0.25s',
      transition: isDragging ? null : 'background 0.25s'
    };

    const checkedIconStyle = {
      position: 'relative',
      opacity: (pos - this.uncheckedPos) / (this.checkedPos - this.uncheckedPos),
      width: Math.min(height * 1.5, width - (this.handleDiameter + height) / 2 + 1),
      height,
      pointerEvents: 'none',
      WebkitTransition: isDragging ? null : 'opacity 0.25s',
      MozTransition: isDragging ? null : 'opacity 0.25s',
      transition: isDragging ? null : 'opacity 0.25s'
    };

    const uncheckedIconStyle = {
      opacity: 1 - (pos - this.uncheckedPos) / (this.checkedPos - this.uncheckedPos),
      width: Math.min(height * 1.5, width - (this.handleDiameter + height) / 2 + 1),
      height,
      position: 'absolute',
      right: 0,
      top: 0,
      pointerEvents: 'none',
      WebkitTransition: isDragging ? null : 'opacity 0.25s',
      MozTransition: isDragging ? null : 'opacity 0.25s',
      transition: isDragging ? null : 'opacity 0.25s'
    };

    const handleStyle = {
      height: this.handleDiameter,
      width: this.handleDiameter,
      background: getBackgroundColor(
        pos,
        this.checkedPos,
        this.uncheckedPos,
        offHandleColor,
        onHandleColor
      ),
      touchAction: 'none',
      cursor: disabled ? 'default' : 'pointer',
      WebkitTransition: isDragging ? null : 'background-color 0.25s, left 0.25s, box-shadow 0.1s',
      MozTransition: isDragging ? null : 'background-color 0.25s, left 0.25s, box-shadow 0.1s',
      transition: isDragging ? null : 'background-color 0.25s, left 0.25s, box-shadow 0.1s',
      display: 'inline-block',
      borderRadius: '50%',
      position: 'absolute',
      left: pos,
      top: Math.max(0, (height - this.handleDiameter) / 2),
      border: 0,
      outline: 0,
      boxShadow: hasOutline ? activeBoxShadow : boxShadow
    };

    return (
      <div className={className} style={rootStyle}>
        <div
          className="react-switch-bg"
          style={backgroundStyle}
          onClick={disabled ? null : this.handleClick}
        >
          {checkedIcon &&
            <div style={checkedIconStyle}>
              {checkedIcon}
            </div>
          }
          {uncheckedIcon &&
            <div style={uncheckedIconStyle}>
              {uncheckedIcon}
            </div>
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
  offColor: PropTypes.string,
  onColor: PropTypes.string,
  offHandleColor: PropTypes.string,
  onHandleColor: PropTypes.string,
  handleDiameter: PropTypes.number,
  uncheckedIcon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ]),
  checkedIcon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ]),
  boxShadow: PropTypes.string,
  activeBoxShadow: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string
};

Switch.defaultProps = {
  disabled: false,
  offColor: '#888',
  onColor: '#080',
  offHandleColor: '#fff',
  onHandleColor: '#fff',
  handleDiameter: null,
  uncheckedIcon: defaultUncheckedIcon,
  checkedIcon: defaultCheckedIcon,
  boxShadow: null,
  activeBoxShadow: '0px 0px 2px 3px #33bbff',
  height: 28,
  width: 56,
  className: null,
  id: null,
  'aria-labelledby': null,
  'aria-label': null
};

export default Switch;
