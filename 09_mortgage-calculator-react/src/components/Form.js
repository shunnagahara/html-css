import React, { useEffect, useState } from "react";
import { validationMortgageForm } from "../utils/validation";

export default function Form({ onCalculate, onClear }) {
  const [formData, setFormData] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: "",
  });

  const [errors, setErrors] = useState({
    mortgageAmount: false,
    mortgageTerm: false,
    interestRate: false,
    mortgageType: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleClearAll = () => {
    setFormData({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "",
    });
    onClear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } =
      validationMortgageForm(formData);
    setErrors(validationErrors);

    if (isValid) {
      onCalculate();
    }
  };

  return (
    <section className="form">
      <header className="form__header">
        <h1 className="form__title">Mortgage Calculator</h1>
        <button
          type="button"
          className="form__clear-link"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </header>

      <form className="form__content" onSubmit={handleSubmit}>
        <div className="form__field">
          <label htmlFor="mortgage-amount" className="form__label">
            Mortgage Amount
          </label>
          <div
            className={`form__input-wrapper ${
              errors.mortgageAmount ? "form__input-wrapper--error" : ""
            }`}
          >
            <span
              className={`form__unit form__unit--prefix ${
                errors.mortgageAmount ? "form__unit--error" : ""
              }`}
            >
              £
            </span>
            <input
              type="number"
              id="mortgage-amount"
              name="mortgageAmount"
              value={formData.mortgageAmount}
              onChange={handleChange}
              className="form__input"
            />
          </div>
          {errors.mortgageAmount && (
            <p className="form__error-message">This field is required</p>
          )}
        </div>

        <div className="form__row">
          <div className="form__field">
            <label htmlFor="mortgage-term" className="form__label">
              Mortgage Term
            </label>
            <div
              className={`form__input-wrapper ${
                errors.mortgageTerm ? "form__input-wrapper--error" : ""
              }`}
            >
              <input
                type="number"
                id="mortgage-term"
                name="mortgageTerm"
                value={formData.mortgageTerm}
                onChange={handleChange}
                className="form__input"
              />
              <span
                className={`form__unit form__unit--suffix ${
                  errors.mortgageTerm ? "form__unit--error" : ""
                }`}
              >
                years
              </span>
            </div>
            {errors.mortgageTerm && (
              <p className="form__error-message">This field is required</p>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="interest-rate" className="form__label">
              Interest Rate
            </label>
            <div
              className={`form__input-wrapper ${
                errors.interestRate ? "form__input-wrapper--error" : ""
              }`}
            >
              <input
                type="number"
                id="interest-rate"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                className="form__input"
                step="0.01"
              />
              <span
                className={`form__unit form__unit--suffix ${
                  errors.interestRate ? "form__unit--error" : ""
                }`}
              >
                %
              </span>
            </div>
            {errors.interestRate && (
              <p className="form__error-message">This field is required</p>
            )}
          </div>
        </div>

        <fieldset className="form__radio-group">
          <legend className="form__label">Mortgage Type</legend>

          <div
            className={`form__radio-option ${
              errors.mortgageType ? "form__radio-option--error" : ""
            }`}
          >
            <input
              type="radio"
              id="repayment"
              name="mortgageType"
              value="repayment"
              checked={formData.mortgageType === "repayment"}
              onChange={handleChange}
              className="form__radio"
            />
            <label htmlFor="repayment" className="form__radio-label">
              Repayment
            </label>
          </div>

          <div
            className={`form__radio-option ${
              errors.mortgageType ? "form__radio-option--error" : ""
            }`}
          >
            <input
              type="radio"
              id="interest-only"
              name="mortgageType"
              value="interest-only"
              checked={formData.mortgageType === "interest-only"}
              onChange={handleChange}
              className="form__radio"
            />
            <label htmlFor="interest-only" className="form__radio-label">
              Interest Only
            </label>
          </div>

          {errors.mortgageType && (
            <p className="form__error-message">This field is required</p>
          )}
        </fieldset>

        <button type="submit" className="form__button">
          <img
            src="./assets/images/icon-calculator.svg"
            alt=""
            className="form__button-icon"
          />
          Calculate Repayments
        </button>
      </form>
    </section>
  );
}
