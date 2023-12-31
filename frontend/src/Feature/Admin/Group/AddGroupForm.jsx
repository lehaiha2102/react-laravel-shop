import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";

function AddGroupForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedValues(value);
  };

  const handleDeleteValue = (value) => {
    const updatedValues = selectedValues.filter((val) => val !== value);
    setSelectedValues(updatedValues);
  };

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

  const handleGalleryUpload = (event) => {
    const files = event.target.files;
    const reader = new FileReader();

    const images = [];

    const loadImage = (file) => {
      return new Promise((resolve, reject) => {
        reader.onload = (event) => {
          const image = event.target.result;
          resolve(image);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    };

    const loadImages = async () => {
      for (const file of files) {
        try {
          const image = await loadImage(file);
          images.push(image);
        } catch (error) {
          console.error("Error loading image:", error);
        }
      }

      setSelectedGallery(images);
    };

    loadImages();
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
      galleryimage: yup
        .string()
        .required("Please enter category image")
        .matches(/\.(jpg|png)$/, "Category image must be in JPG or PNG format"),
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
      galleryimage: event.target.gallery - image.value,
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
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}
          >
            Image
          </div>
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

      <div className={`${admin["cate-info-upload"]}`}>
        <div className={`${admin["upload-title"]}`}>
          <div
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}
          >
           Name
          </div>
          <div
            className={`${admin.description} ${admin.textFont} ${admin.shawdowText}`}
          >
           Add your group name and necessary information from her
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
        </div>
      </div>
      <div className={admin["submit-btn"]}>
        <Link to="/admin/groups" className={admin["btn-white"]}>
          Back
        </Link>
        <button className={admin["btn-blue"]} type="submit">
          Add Category
        </button>
      </div>
    </form>
  );
}

export default AddGroupForm;
