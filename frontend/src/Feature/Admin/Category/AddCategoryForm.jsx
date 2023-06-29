import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaAutosize } from "@mui/base";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";
import MyInputField from "../../../components/Fields/TextField";

AddCategoryForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddCategoryForm() {
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

  const schema = yup
    .object({
      name: yup
        .string()
        .required("Please enter category name"),
      image: yup
        .string()
        .required("Please enter category image"),
        icon: yup
        .string()
        .required("Please enter category image"),
    description: yup
    .string()
    .required("Please enter category description")
    .min(255, "Category description so short")
    })
    .required();

  const form = useForm({
    defaultValues: {
      name: "",
      image: "",
      icon: "",
      description: "",
      category_parent: "",
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

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="row image-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title">Image</div>
          <div className="description">Upload your category image here</div>
        </div>
        <div className="upload-input">
          <label htmlFor="image-upload-input">
            <img src={UploadImage} alt="upload image" className="upload-icon" />
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
            className="category-input-data image-category"
            onChange={handleImageUpload}
            form={form}
          />
          <div className="category-image-show">
            {selectedImage && <img src={selectedImage} alt="uploaded image" />}
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
          <MyInputField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="category-input-data"
            name="name"
            form={form}
          />
          <MyInputField
            className="category-input-data"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            label="Select Icon"
            name="icon"
            form={form}
          >
            <MenuItem defaultValue="--Select--"></MenuItem>
          </MyInputField>
          <MyInputField
            className="category-input-data"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            label="Parent Category"
            name="parent_category"
            form={form}
          >
            <MenuItem defaultValue="--Select--"></MenuItem>
          </MyInputField>
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
        <Button className="category-submit" type="submit"  disabled={isSubmitting}>
          Add Category
        </Button>
      </div>
    </form>
  );
}

export default AddCategoryForm;
