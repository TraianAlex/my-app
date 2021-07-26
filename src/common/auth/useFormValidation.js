import { useEffect, useState } from 'react';

export const useFormValidation = (initialState, validate, authUser) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        authUser();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [authUser, errors, isSubmitting]);

  const handleChange = (event) =>
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  };
};
