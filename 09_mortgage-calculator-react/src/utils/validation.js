export const validationMortgageForm = (formData) => {
  const errors = {
    mortgageAmount: false,
    mortgageTerm: false,
    interestRate: false,
    mortgageType: false,
  };

  let isValid = true;

  if (!formData.mortgageAmount || formData.mortgageAmount.trim() === "") {
    errors.mortgageAmount = true;
    isValid = false;
  }

  if (!formData.mortgageTerm || formData.mortgageTerm.trim() === "") {
    errors.mortgageTerm = true;
    isValid = false;
  }

  if (!formData.interestRate || formData.interestRate.trim() === "") {
    errors.interestRate = true;
    isValid = false;
  }

  if (!formData.mortgageType || formData.mortgageType.trim() === "") {
    errors.mortgageType = true;
    isValid = false;
  }

  return { isValid, errors };
};

export const clearErrors = () => ({
  mortgageAmount: false,
  mortgageTerm: false,
  interestRate: false,
  mortgageType: false,
});
