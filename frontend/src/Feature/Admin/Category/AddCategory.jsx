import { Button, TextField } from "@mui/material";
import UploadImage from "../Assets/Images/upload_image.svg";
import MenuItem from "@mui/material/MenuItem";
import { TextareaAutosize } from "@mui/base";
import { useState } from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

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

AddCategory.propTypes = {
  onSubmit: PropTypes.func,
};

function AddCategory() {
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

  return (
    <>
      <div className="add-title text-title">Create New Category</div>
      <div className="dashed-line"></div>

      <form onSubmit={form.handleSubmit(handleCategorySubmit)}>
        <div className="row image-upload">
          <div className="upload-title col-md-4">
            <div className="title text-title">Image</div>
            <div className="description">Upload your category image here</div>
          </div>
          <div className="upload-input">
            <label htmlFor="image-upload-input">
              <img
                src={UploadImage}
                alt="upload image"
                className="upload-icon"
              />
              <div className="descriptions">
                <span className="color-blue upload-image-title">
                  Upload an image{" "}
                </span>
                <span>or drag and drop</span>
              </div>
            </label>
            <input
              type="file"
              id="image-upload-input"
              name="image"
              className="image-category"
              onChange={handleImageUpload}
              form={form}
            />
            <div className="category-image-show">
              {selectedImage && (
                <img src={selectedImage} alt="uploaded image" />
              )}
            </div>
          </div>
        </div>

        <div className="dashed-line"></div>
        <div className="row cate-info-upload">
          <div className="upload-title col-md-4">
            <div className="title text-title">Description</div>
            <div className="description">
              Add your category details and necessary information from her
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
            <TextField
              className="category-input-data"
              id="outlined-select-currency"
              select
               defaultValue="EUR"
              label="Select Icon"
              name="icon"
              form={form}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className="category-input-data"
              id="outlined-select-currency"
              select
               defaultValue="EUR"
              label="Parent Category"
              form={form}
              name="parent_category"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextareaAutosize
              className="category-input-data"
              placeholder="Details"
              name="details"
              form={form}
            />
          </div>
        </div>

        <div className="submit-btn">
        <Link to="/admin/categories" className="back-btn">
          Back
        </Link>
          <Button className="category-submit" disabled={isSubmitting} type="submit">
            Add Category
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddCategory;
