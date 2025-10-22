import React from 'react';
import CheckboxIcon from '../atoms/CheckboxIcon';
import Required from '../atoms/Required';
import styles from './Checkbox.module.scss';

const Checkbox = ({ 
  id, 
  name, 
  checked, 
  onChange, 
  children, 
  required = false, 
  error = '',
  className = ''
}) => {
  return (
    <div className={`${styles.checkbox} ${className}`}>
      <div className={styles.checkbox__wrapper}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          className={styles.checkbox__input}
          required={required}
        />
        <label htmlFor={id} className={styles.checkbox__label}>
          <CheckboxIcon checked={checked} />
          <span className={styles.checkbox__text}>
            {children}
            {required && <Required />}
          </span>
        </label>
      </div>
      
      {error && (
        <div className={styles.checkbox__error} aria-live="polite">
          {error}
        </div>
      )}
    </div>
  );
};

export default Checkbox;