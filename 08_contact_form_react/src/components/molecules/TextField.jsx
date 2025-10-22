import React from "react";
import Required from "../atoms/Required";
import styles from "./TextField.module.scss";

const TextField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  error = "",
  isTextarea = false,
  rows,
  placeholder = "",
  className = "",
}) => {
  const inputClass = `${styles.textField__input} ${
    error ? styles["textField__input--error"] : ""
  }`;

  return (
    <div className={`${styles.textField} ${className}`}>
      <label htmlFor={id} className={styles.textField__label}>
        {label}
        {required && <Required />}
      </label>

      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
          rows={rows}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
          placeholder={placeholder}
          required={required}
        />
      )}

      {error && (
        <div className={styles.textField__error} aria-live="polite">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;
