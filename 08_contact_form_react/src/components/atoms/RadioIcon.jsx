import React from 'react';
import styles from './RadioIcon.module.scss';

const RadioIcon = ({ checked = false }) => {
  return (
    <div className={`${styles.radioIcon} ${checked ? styles['radioIcon--checked'] : ''}`}>
      {checked && <div className={styles.radioIcon__inner} />}
    </div>
  );
};

export default RadioIcon;