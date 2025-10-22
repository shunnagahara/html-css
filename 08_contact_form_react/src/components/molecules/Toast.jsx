import React from 'react';
import styles from './Toast.module.scss';

const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.toast}>
      <div className={styles.toast__content}>
        <div className={styles.toast__icon}>
          <svg width="20" height="21" viewBox="0 0 20 21">
            <path 
              d="M14.28 7.72L9 13l-3.28-3.28a1 1 0 0 0-1.44 1.44l4 4a1 1 0 0 0 1.44 0l6-6a1 1 0 0 0-1.44-1.44z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.toast__message}>
          <h3 className={styles.toast__title}>Message Sent!</h3>
          <p className={styles.toast__text}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;