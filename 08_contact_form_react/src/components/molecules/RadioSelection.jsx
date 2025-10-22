import React from 'react';
import Required from '../atoms/Required';
import RadioIcon from '../atoms/RadioIcon';
import styles from './RadioSelection.module.scss';

const RadioSelection = ({ 
  legend, 
  name, 
  options = [], 
  value, 
  onChange, 
  required = false, 
  error = ''
}) => {
  return (
    <fieldset className={styles.radioSelection}>
      <legend className={styles.radioSelection__legend}>
        {legend}
        {required && <Required />}
      </legend>
      
      <div className={styles.radioSelection__options}>
        {options.map((option) => (
          <div key={option.value} className={styles.radioSelection__option}>
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className={styles.radioSelection__input}
              required={required}
            />
            <label 
              htmlFor={option.value} 
              className={`${styles.radioSelection__label} ${value === option.value ? styles['radioSelection__label--selected'] : ''}`}
            >
              <RadioIcon checked={value === option.value} />
              <span className={styles.radioSelection__text}>{option.label}</span>
            </label>
          </div>
        ))}
      </div>
      
      {error && (
        <div className={styles.radioSelection__error} aria-live="polite">
          {error}
        </div>
      )}
    </fieldset>
  );
};

export default RadioSelection;