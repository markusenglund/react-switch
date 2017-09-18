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
      left: props.checked ? 29 : 1,
      inTransition: false,
      startX: null,
      isDragging: false
    };
  }

  componentWillReceiveProps({ checked }) {
    const { left } = this.state;
    const newLeft = checked ? 29 : 1;
    if (left !== newLeft && this.props.checked !== checked) {
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
    if (keyCode === 13 || keyCode === 32 && !isDragging) {
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
    const { checked } = this.props;
    const { startX } = this.state;

    const startLeft = checked ? 29 : 1;
    const newLeft = startLeft + clientX - startX;
    const left = Math.min(29, Math.max(1, newLeft));
    console.log('DRAG, newleft: ', newLeft, 'left: ', left);
    this.setState({ left, isDragging: true });
  }

  handleDragStop() {
    const { checked, onChange } = this.props;
    const { left, isDragging, inTransition } = this.state;
    if (inTransition) {
      return;
    }
    console.log('DRAGSTOP, checked: ', checked, 'left: ', left);

    if (!isDragging) {
      this.setState({ startX: null });
      onChange(!checked);
      return;
    }

    if (checked) {
      if (left > 15) {
        this.setState({ left: 29, startX: null, isDragging: false });
      } else {
        this.setState({ startX: null, isDragging: false });
        onChange(false);
      }
    }
    if (left < 15) {
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
    const { checked } = this.props;
    const { left, startX } = this.state;
    return (
      <div className="react-switch">
        {/* eslint-disable jsx-a11y/no-static-element-interactions */ }
        <span
          className="react-switch-bg"
          style={{ backgroundColor: checked ? 'green' : 'grey' }}
          onClick={this.handleClick}
        />
        {/* eslint-enable jsx-a11y/no-static-element-interactions */}
        <DraggableCore
          onStart={this.handleDragStart}
          onDrag={this.handleDrag}
          onStop={this.handleDragStop}
        >
          <button
            onTransitionEnd={this.handleTransitionEnd}
            onKeyDown={this.handleKeyDown}
            className="react-switch-toggle"
            style={{
              left,
              transition: startX ? null : 'left 0.2s ease-out'
            }}
          />
        </DraggableCore>
      </div>
    );
  }
}
Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Switch;
