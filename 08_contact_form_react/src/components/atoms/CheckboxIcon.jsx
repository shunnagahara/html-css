import React from 'react';
import styles from './CheckboxIcon.module.scss';

const CheckboxIcon = ({ checked = false }) => {
  return (
    <div className={`${styles.checkboxIcon} ${checked ? styles['checkboxIcon--checked'] : ''}`}>
      {checked && (
        <svg width="14" height="12" viewBox="0 0 14 12" className={styles.checkboxIcon__check}>
          <path 
            d="m1 6 3.5 3.5L13 1" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none" 
            fillRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default CheckboxIcon;