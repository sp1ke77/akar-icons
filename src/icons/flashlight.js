import React from 'react';
import PropTypes from 'prop-types';

const Flashlight = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
      id="Flashlight"
    >
      <path d="M5 4v1c0 1.636 2 4 3 5l.75 9.01A3.26 3.26 0 0012 22v0a3.26 3.26 0 003.25-2.99L16 10c1-1 3-3.364 3-5V4"></path>
      <path d="M12 11v2"></path>
      <ellipse cx="12" cy="4" rx="7" ry="2"></ellipse>
    </svg>
  );
};

Flashlight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Flashlight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Flashlight;
