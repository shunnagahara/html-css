export const validateRequired = (value) => {
  return value && value.trim() !== '';
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.firstName)) {
    errors.firstName = 'This field is required';
  }

  if (!validateRequired(formData.lastName)) {
    errors.lastName = 'This field is required';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'This field is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validateRequired(formData.queryType)) {
    errors.queryType = 'Please select a query type';
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'This field is required';
  }

  if (!formData.consent) {
    errors.consent = 'To submit this form, please consent to being contacted';
  }

  return errors;
};