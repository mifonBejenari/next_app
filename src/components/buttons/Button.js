import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

/**
 * Button component for user interaction
 */
export const Button = ({ type, size, label, ...props }) => {
  let buttonSize;
  let buttonType;

  switch (size) {
    case 'small':
      buttonSize = 'py-1 px-2';
      break;
    case 'medium':
      buttonSize = 'py-2 px-4';
      break;
    case 'large':
      buttonSize = 'py-2 px-8';
      break;
  }

  switch (type) {
    case 'primary':
      buttonType = '';
      break;
    case 'secondary':
      buttonType = '';
      break;
  }

  return (
    <button
      type="button"
      className={[
        'button',
        buttonSize,
        buttonType,
        'border',
        'rounded-sm',
      ].join(' ')}
      {...props}
    >
      { label }
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  onClick: undefined,
};
