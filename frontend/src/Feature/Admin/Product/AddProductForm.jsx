import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";

function AddProductForm() {
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
    const files = Array.from(event.target.files);
    const reader = new FileReader();

    const images = [...selectedGallery];

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
      const maxImages = 6;
      const remainingSlots = maxImages - images.length;

      if (files.length > remainingSlots) {
        toast.info(
          `The number of photos in the gallery exceeds the allowed number (6 photos)`
        );
        return;
      }

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

  const handleDeleteImage = (index) => {
    const updatedGallery = [...selectedGallery];
    updatedGallery.splice(index, 1);
    setSelectedGallery(updatedGallery);
  };

  const schema = yup
    .object({
      name: yup
        .string()
        .required("Please enter product name")
        .max(255, "Product name should not exceed 255 characters")
        .matches(
          /^[A-Za-z ]*$/,
          "Product name should only contain letters and spaces"
        ),
      image: yup
        .string()
        .required("Please enter product image")
        .matches(/\.(jpg|png)$/, "Product image must be in JPG or PNG format"),
      galleryimage: yup
        .string()
        .required("Please enter Product image")
        .matches(/\.(jpg|png)$/, "Product image must be in JPG or PNG format"),
      description: yup
        .string()
        .required("Please enter product description")
        .min(100, "Product description is too short"),
    })
    .required();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      image: event.target.image.value,
      galleryimage: event.target.galleryImage.value,
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
      <div className={`${admin["image-upload"]}`}>
        <div className={`${admin["upload-title"]}`}>
          <div
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}
          >
            Gallery
          </div>
          <div
            className={`${admin.description} ${admin.textFont} ${admin.shawdowText}`}
          >
            Upload your product image gallery here
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
            id="gallery-image-upload-input"
            name="galleryImage"
            className={`${admin["image-category"]}`}
            onChange={handleGalleryUpload}
            multiple
          />
          <div className={`${admin["images-show"]}`}>
            {selectedGallery.map((image, index) => (
              <img key={index} src={image} alt={`uploaded image ${index}`} />
            ))}
          </div>
        </div>
      </div>

      <div className={admin["dashed-line"]}></div>

      <div className={`${admin["cate-info-upload"]}`}>
        <div className={`${admin["upload-title"]}`}>
          <div
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}
          >
            Categories & Manufacture
          </div>
          <div
            className={`${admin.description} ${admin.textFont} ${admin.shawdowText}`}
          >
            Select product categories and manufacture from here
          </div>
        </div>

        <div className={admin["upload-input"]}>
          <select name="icon" id="" className={admin["input-data"]}>
            <option value="">Select Categories</option>
          </select>
          <select name="parent_category" id="" className={admin["input-data"]}>
            <option value="">Select Manufacturer</option>
          </select>
        </div>
      </div>

      <div className={admin["dashed-line"]}></div>

      <div className={`${admin["cate-info-upload"]}`}>
        <div className={`${admin["upload-title"]}`}>
          <div
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}
          >
           Description
          </div>
          <div
            className={`${admin.description} ${admin.textFont} ${admin.shawdowText}`}
          >
           Add your product description and necessary information from here
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
          <input
            id="outlined-basic"
            placeholder="Price"
            variant="outlined"
            className={admin["input-data"]}
            name="price"
          />
          <input
            id="outlined-basic"
            placeholder="Sale Price"
            variant="outlined"
            className={admin["input-data"]}
            name="sale_rice"
          />
          <input
            id="outlined-basic"
            placeholder="Quantity"
            className={admin["input-data"]}
            name="quantity"
            type="number"
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            defaultValue="Description"
            className={admin["input-data"]}
          ></textarea>
          <label htmlFor="status">
            <input type="radio" name="status" id="" /> Published
            <input type="radio" name="status" id="" />
            Draft
          </label>
        </div>
      </div>

      <div className={admin["dashed-line"]}></div>
      <div className={`${admin["cate-info-upload"]}`}>
        <div className={`${admin["upload-title"]}`}>
          <div
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}
          >Attributes</div>
          <div
            className={`${admin.description} ${admin.textFont} ${admin.shawdowText}`}
          >
            Select your product's attributes from here
          </div>
        </div>
        <div className={admin["upload-input"]}>
          <label>
            <input type="checkbox" name="color" value="apple" /> Apple
          </label>
          <label>
            <input type="checkbox" name="color" value="banana" /> Banana
          </label>
          <label>
            <input type="checkbox" name="color" value="orange" /> Orange
          </label>
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

export default AddProductForm;
