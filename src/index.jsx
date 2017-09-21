import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import '../src/styles.css';

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
      left: props.checked ? props.width - props.height : 1,
      inTransition: false,
      startX: null,
      isDragging: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { left } = this.state;
    const { checked, width, height } = this.props;
    const checkedLeft = width - height + 1;
    const newLeft = nextProps.checked ? checkedLeft : 1;
    if (left !== newLeft && checked !== nextProps.checked) {
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

  handleKeyDown({ keyCode }) {
    const { checked, onChange } = this.props;
    const { isDragging } = this.state;
    if (keyCode === 32 && !isDragging) {
      onChange(!checked);
    }
  }

  handleDragStart(event) {
    const { inTransition } = this.state;
    if (inTransition) {
      return;
    }

    const clientX = event.clientX || event.touches[0].clientX;
    console.log('DRAGSTART, startX: ', clientX);
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
    console.log('DRAG, newleft: ', newLeft, 'left: ', left);
    this.setState({ left, isDragging: true });
  }

  handleDragStop() {
    const { left, isDragging, inTransition } = this.state;
    if (inTransition) {
      return;
    }
    const { checked, onChange, width, height } = this.props;
    console.log('DRAGSTOP, checked: ', checked, 'left: ', left);

    if (!isDragging) {
      this.setState({ startX: null });
      onChange(!checked);
      return;
    }
    const checkedLeft = width - height + 1;
    if (checked) {
      if (left > (checkedLeft + 1) / 2) {
        this.setState({ left: checkedLeft, startX: null, isDragging: false });
      } else {
        this.setState({ startX: null, isDragging: false });
        onChange(false);
      }
    }
    if (left < (checkedLeft + 1) / 2) {
      this.setState({ left: 1, startX: null, isDragging: false });
    } else {
      this.setState({ startX: null, isDragging: false });
      onChange(true);
    }
  }

  handleTransitionEnd() {
    console.log('TRANSITION END');
    this.setState({ inTransition: false });
  }

  render() {
    const {
      checked,
      disabled,
      offColor,
      onColor,
      handleColor,
      activeHandleColor,
      height,
      width
    } = this.props;
    const { left, isDragging, startX } = this.state;
    const checkedLeft = width - height + 1;

    // let handleCursor = 'grab';
    // if (disabled) {
    //   handleCursor = 'default';
    // } else if (startX) {
    //   handleCursor = 'grabbing';
    // }
    // console.log(handleCursor)
    return (
      <div
        className="react-switch"
        style={{ opacity: disabled ? 0.4 : 1 }}
      >
        <span
          className="react-switch-bg"
          style={{
            height,
            width,
            background: offColor,
            borderRadius: height / 2
          }}
        />
        {/* eslint-disable jsx-a11y/no-static-element-interactions */ }
        <span
          className="react-switch-fg"
          style={{
            height,
            width,
            opacity: (left - 1) / (checkedLeft - 1),
            background: onColor,
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
            className="react-switch-toggle"
            style={{
              left,
              height: height - 2,
              width: height - 2,
              background: startX ? activeHandleColor : handleColor,
              transition: isDragging ? null : 'left 0.2s ease-out',
              cursor: disabled ? 'default' : 'pointer'
            }}
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
  offColor: PropTypes.string,
  onColor: PropTypes.string,
  handleColor: PropTypes.string,
  activeHandleColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number

};

Switch.defaultProps = {
  disabled: false,
  offColor: 'grey',
  onColor: 'green',
  handleColor: 'white',
  activeHandleColor: '#ddd',
  height: 28,
  width: 56
};

export default Switch;
