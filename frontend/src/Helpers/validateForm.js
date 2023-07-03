 const validateFormData = async (formData) => {
    try {
      await schema.validate(formData, { abortEarly: false });
    } catch (error) {
      if (error.inner) {
        error.inner.forEach((validationError) => {
          toast.error(validationError.message);
        });
      } else {
        console.log('No validation errors');
      }
    }
};

export default validateFormData;
