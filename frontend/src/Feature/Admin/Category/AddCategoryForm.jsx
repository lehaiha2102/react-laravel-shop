import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";
import { toast } from "react-toastify";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";

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
        .required("Please enter category name")
        .max(255, "Category name should not exceed 255 characters")
        .matches(
          /^[A-Za-z ]*$/,
          "Category name should only contain letters and spaces"
        ),
      image: yup
        .string()
        .required("Please enter category image")
        .matches(/\.(jpg|png)$/, "Category image must be in JPG or PNG format"),
      icon: yup.string().required("Please enter category icon"),
      description: yup
        .string()
        .required("Please enter category description")
        .min(100, "Category description is too short"),
    })
    .required();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      image: event.target.image.value,
      icon: event.target.icon.value,
      description: event.target.description.value,
    };

    try {
      await schema.validate(formData, { abortEarly: false });
    } catch (error) {
      if (error.inner) {
        error.inner.forEach((validationError) => {
          toast.error(validationError.message);
        });
      } else {
        console.log("No validation errors");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={admin["image-upload"]}>
        <div className={admin["upload-title"]}>
        <div
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}>Image</div>
          <div
            className={`${admin.title} ${admin["text-font "]} ${admin["shawdow-text"]}`}
          >
            Upload your category image here
          </div>
        </div>
        <div className={admin["upload-input"]}>
          <label htmlFor="image-upload-input">
            <img
              src={UploadImage}
              alt="upload image"
              className={admin["upload-icon"]}
            />
            <div className={`${admin["descriptions"]} ${admin["text-font"]}`}>
              <span
                className={`${admin["blue-text-font"]} ${admin["upload-image-title"]}`}
              >
                Upload an image
              </span>
              <span>or drag and drop</span>
            </div>
          </label>
          <input
            type="file"
            id="image-upload-input"
            name="image"
            className={`${admin["input-data"]} ${admin["image-category"]}`}
            onChange={handleImageUpload}
          />
          <div className={`${admin["images-show"]} ${admin["feature-logo"]}`}>
            {selectedImage && <img src={selectedImage} alt="uploaded image" />}
          </div>
        </div>
      </div>

      <div className={admin["dashed-line"]}></div>
      <div className={admin["cate-info-upload"]}>
        <div className={admin["upload-title"]}>
          <div className={`${admin.title} ${admin["font-heading"]}`}>
            Description
          </div>
          <div
            className={`${admin.title} ${admin["text-font "]} ${admin["shawdow-text"]}`}
          >
            Add your category details and necessary information from here
          </div>
        </div>
        <div className={admin["upload-input"]}>
          <input
            id="outlined-basic"
            placeholder="Name"
            variant="outlined"
            className={admin["input-data"]}
            name="name"
          />
          <select name="icon" id="" className={admin["input-data"]}>
            <option value="">Select Icon</option>
          </select>
          <select name="parent_category" id="" className={admin["input-data"]}>
            <option value="">Select Parent Category</option>
          </select>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            defaultValue="Description"
            className={admin["input-data"]}
          ></textarea>
        </div>
      </div>

      <div className={admin["submit-btn"]}>
        <Link to="/admin/categories" className={admin["btn-white"]}>
          Back
        </Link>
        <button className={admin["btn-blue"]} type="submit">
          Add Category
        </button>
      </div>
    </form>
  );
}

export default AddCategoryForm;
