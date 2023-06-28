import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import DeleteIcon from '@mui/icons-material/Delete';

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

AddAttribute.propTypes = {
  onSubmit: PropTypes.func,
};

function AddAttribute() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const schema = yup.object({
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

  const form = useForm({
    defaultValues: {
      image: "",
      name: "",
      icon: "",
      parent_category: "",
      details: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;
  const { enqueueSnackbar } = useSnackbar();

  const handleCategorySubmit = async (values) => {
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

  const [values, setValues] = useState([]);

  const handleAddValue = () => {
    setValues([...values, ""]);
  };

  const handleValueChange = (index, newValue) => {
    const updatedValues = [...values];
    updatedValues[index] = newValue;
    setValues(updatedValues);
  };

  const handleRemoveValue = (index) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  return (
    <>
      <div className="add-title text-title">Create New Attribute</div>
      <div className="dashed-line"></div>

      <form onSubmit={form.handleSubmit(handleCategorySubmit)}>
        <div className="row cate-info-upload">
          <div className="upload-title col-md-4">
            <div className="title text-title">Attribute</div>
            <div className="description">
              Add your attribute name and necessary information from here
            </div>
          </div>
          <div className="upload-input">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="category-input-data"
              form={form}
              name="name"
            />
          </div>
        </div>
        <div className="dashed-line"></div>
        <div className="row cate-info-upload">
          <div className="upload-title">
            <div className="title text-title">Attribute Values</div>
            <div className="description">
              Add your attribute value and necessary information from here
            </div>
          </div>
          <div className="upload-input">
            {values.map((value, index) => (
              <div className="text-field" key={index}>
                <TextField
                  id="outlined-basic"
                  label="Value"
                  variant="outlined"
                  className="category-input-data"
                  value={value}
                  onChange={(event) =>
                    handleValueChange(index, event.target.value)
                  }
                />
                <TextField
                  id="outlined-basic"
                  label="Meta"
                  variant="outlined"
                  className="category-input-data"
                  type="color"
                  value={value}
                  onChange={(event) =>
                    handleValueChange(index, event.target.value)
                  }
                />
                <button
                  className="remove-value"
                  onClick={() => handleRemoveValue(index)}
                >
                  <DeleteIcon/>
                </button>
              </div>
            ))}
            <button className="add-value" onClick={handleAddValue}>
              Add Value
            </button>
          </div>
        </div>
        <div className="submit-btn">
        <Link to="/admin/attributes" className="back-btn">
          Back
        </Link>
          <Button
            className="category-submit"
            disabled={isSubmitting}
            type="submit"
          >
            Add Attribute
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddAttribute;
