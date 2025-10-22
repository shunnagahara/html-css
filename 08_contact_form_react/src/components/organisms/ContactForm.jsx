import React, { useState, useEffect } from "react";
import TextField from "../molecules/TextField";
import RadioSelection from "../molecules/RadioSelection";
import Checkbox from "../molecules/Checkbox";
import Button from "../atoms/Button";
import Toast from "../molecules/Toast";
import { validateForm } from "../../utils/validation";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);

  const queryTypeOptions = [
    { value: "general-enquiry", label: "General Enquiry" },
    { value: "support-request", label: "Support Request" },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTabletOrLarger(window.innerWidth >= 768); // $breakpoint-tablet
    };

    // 初回チェック
    checkScreenSize();

    // リサイズ監視
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const messageRows = isTabletOrLarger ? 3 : 8;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    });
    setErrors({});

    // Show success toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <>
      <main className={styles.contactForm}>
        <h1 className={styles.contactForm__title}>Contact Us</h1>

        <form
          onSubmit={handleSubmit}
          className={styles.contactForm__form}
          noValidate
        >
          <div className={styles.contactForm__fieldGroup}>
            <TextField
              label="First Name"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              error={errors.firstName}
              className={styles.contactForm__halfWidth}
            />

            <TextField
              label="Last Name"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              error={errors.lastName}
              className={styles.contactForm__halfWidth}
            />
          </div>

          <TextField
            label="Email Address"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            error={errors.email}
          />

          <RadioSelection
            legend="Query Type"
            name="queryType"
            options={queryTypeOptions}
            value={formData.queryType}
            onChange={handleInputChange}
            required
            error={errors.queryType}
          />

          <TextField
            label="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            error={errors.message}
            isTextarea
            rows={messageRows}
          />

          <Checkbox
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            required
            error={errors.consent}
            className={styles.contactForm__consentCheckbox}
          >
            I consent to being contacted by the team
          </Checkbox>

          <Button type="submit">Submit</Button>
        </form>
      </main>

      <Toast
        message="Thanks for completing the form. We'll be in touch soon!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default ContactForm;
