import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";

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

  const handleDeleteImage = (index) => {
    const updatedGallery = [...selectedGallery];
    updatedGallery.splice(index, 1);
    setSelectedGallery(updatedGallery);
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
      <div className="row image-upload">
        <div className="upload-title col-md-4">
          <div className="title  font-table-title">Featured Image</div>
          <div className="description  text-font shawdow-text">
            Upload your product featured image here
          </div>
        </div>
        <div className="upload-input">
          <label htmlFor="image-upload-input">
            <img src={UploadImage} alt="upload image" className="upload-icon" />
            <div className="descriptions text-font">
              <span className="color-blue upload-image-title blue-text-font">
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
          />
          <div className="category-image-show">
            {selectedImage && <img src={selectedImage} alt="uploaded image" />}
          </div>
        </div>
      </div>

      <div className="dashed-line"></div>

      <div className="row image-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title font-table-title">Gallery</div>
          <div className="description text-font shawdow-text">
            Upload your product image gallery here
          </div>
        </div>
        <div className="upload-input">
          <label htmlFor="gallery-image-upload-input">
            <img src={UploadImage} alt="upload image" className="upload-icon" />
            <div className="descriptions  text-font">
              <span className="color-blue upload-image-title blue-text-font">
                Upload an image{" "}
              </span>
              <span>or drag and drop</span>
            </div>
          </label>
          <input
            type="file"
            id="gallery-image-upload-input"
            name="gallery-image"
            className="image-category"
            onChange={handleGalleryUpload}
            multiple
          />
          <div className="category-image-show">
            {selectedGallery.map((image, index) => (
              <img key={index} src={image} alt={`uploaded image ${index}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="dashed-line"></div>

      <div className="row cate-info-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title font-table-title">
            Categories & Manufacture
          </div>
          <div className="description text-font shawdow-text">
            Select product categories and manufacture from here
          </div>
        </div>
        <div className="upload-input">
          <select name="category" className="input-data" defaultValue="">
            <option value="" disabled>
              Select Category
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          <div className="value">
            <div className="selected-values">
              {selectedValues.map((value) => (
                <div key={value} className="selected-value">
                  {value}
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => handleDeleteValue(value)}
                  >
                    <DeleteIcon className="icon" />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>

          <select name="manufacturer" id="" className="input-data">
            <option value="">Select Manufacturer</option>
          </select>
        </div>
      </div>

      <div className="dashed-line"></div>

      <div className="row cate-info-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title font-table-title">Description</div>
          <div className="description text-font shawdow-text">
            Add your product description and necessary information from here
          </div>
        </div>
        <div className="upload-input">
          <input
            id="outlined-basic"
            placeholder="Name"
            variant="outlined"
            className="input-data"
            name="name"
          />
          <input
            id="outlined-basic"
            placeholder="Price"
            variant="outlined"
            className="input-data"
            name="price"
            type="number"
          />
          <input
            id="outlined-basic"
            placeholder="Sale Price"
            variant="outlined"
            className="input-data"
            name="sale_price"
            type="number"
          />
          <input
            id="outlined-basic"
            placeholder="Quantity"
            variant="outlined"
            className="input-data"
            name="quantity"
            type="number"
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            defaultValue="Description"
            className="input-data"
          ></textarea>
          <label htmlFor="status">
            <input type="radio" name="status" id="" /> Published
            <input type="radio" name="status" id="" />
            Draft
          </label>
        </div>
      </div>

      <div className="dashed-line"></div>

      <div className="row cate-info-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title font-table-title">Attributes</div>
          <div className="description text-font shawdow-text">
            Select your product's attributes from here
          </div>
        </div>
        <div className="upload-input">
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

      <div className="submit-btn">
        <Link to="/admin/products" className="btn-white">
          Back
        </Link>
        <button className="btn-blue" type="submit">
          Add Manufacturer
        </button>
      </div>
    </form>
  );
}

export default AddProductForm;
