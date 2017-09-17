import React from 'react';
import PropTypes from 'prop-types';
import '../src/styles.css';

function Switch({ checked = true, onChange }) {
  return (
    <div className="react-switch">
      <span
        className="react-switch-bg"
        style={{ backgroundColor: checked ? 'green' : 'grey' }}
      />
      <button
        className="react-switch-toggle"
        style={{
          left: checked ? '29px' : '1px',
        }}
      />
    </div>
  );
}
Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Switch;
