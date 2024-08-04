// Button.js
import React from 'react';

const Button = ({
  children,
  className = '',
  color = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
}) => {
  // Define base styles and variations
  const baseStyle = `btn ${className}`;
  const colorStyle = `btn-${color}`;
  const sizeStyle = `btn-${size}`;

  return (
    <button
      type={type}
      className={`${baseStyle} ${colorStyle} ${sizeStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
