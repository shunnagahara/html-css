import React from 'react';
import styles from './Button.module.scss';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  onClick, 
  disabled = false,
  className = ''
}) => {
  const buttonClass = `${styles.button} ${styles[`button--${variant}`]} ${className}`.trim();
  
  return (
    <button 
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;