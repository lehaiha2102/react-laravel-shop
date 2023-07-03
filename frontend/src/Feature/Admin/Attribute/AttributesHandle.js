import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    setSelectedImage(reader.result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};

export const schema = yup.object({
  image: yup
    .mixed()
    .test("is-image", "Invalid image format", (value) => {
      if (!value) {
        return true;
      }

      const supportedExtensions = /(png|jpe?g)$/;
      return supportedExtensions.test(value.name.toLowerCase());
    })
    .required("Please upload an image"),
  name: yup.string().required("Please enter the name"),
  icon: yup.string().required("Please select an icon"),
  parent_category: yup.string().required("Please select a parent category"),
  details: yup.string().required("Please enter the details"),
});

export const form = useForm({
  defaultValues: {
    image: "",
    name: "",
    icon: "",
    parent_category: "",
    details: "",
  },
  resolver: yupResolver(schema),
});

export const handleSubmit = async (values) => {
  const { onSubmit } = props;
  if (onSubmit) {
    await onSubmit(values);
  }
};

export const handleCategorySubmit = async (values) => {
  try {
    const action = login(values);
    const resultAction = await dispatch(action);
    const user = unwrapResult(resultAction);
    enqueueSnackbar("login successfully!", { variant: "success" });
  } catch (error) {
    console.log(error);
    enqueueSnackbar(error.message, { variant: "error" });
  }
};

export const handleAddValue = () => {
  setValues([...values, ""]);
};

export const handleValueChange = (index, newValue) => {
  const updatedValues = [...values];
  updatedValues[index] = newValue;
  setValues(updatedValues);
};

export const handleRemoveValue = (index) => {
  const updatedValues = [...values];
  updatedValues.splice(index, 1);
  setValues(updatedValues);
};

export const handleAddStorage = () => {
  setStorages([...storages, ""]);
};

export const handleStorageChange = (index, newValue) => {
  const updatedValues = [...storages];
  updatedValues[index] = newValue;
  setStorages(updatedValues);
};

export const handleRemoveStorage = (index) => {
  const updatedValues = [...storages];
  updatedValues.splice(index, 1);
  setStorages(updatedValues);
};