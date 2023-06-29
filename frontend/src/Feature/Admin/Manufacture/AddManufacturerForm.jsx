import { TextareaAutosize } from "@mui/base";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import UploadImage from "../Assets/Images/upload_image.svg";

function AddManufacturerForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState([]);

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

  return (
    <form>
      <div className="row image-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title">Logo</div>
          <div className="description">
            Upload your Manufacturer/Publication logo from here. Dimension
            should be 160 x 160 px.
          </div>
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
          <div className="title text-title">Cover Image</div>
          <div className="description">
            Upload your Manufacturer/Publication cover image from here,
            Dimension should be 960 x 340 px.
          </div>
        </div>
        <div className="upload-input">
          <label htmlFor="gallery-image-upload-input">
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
            id="gallery-image-upload-input"
            name="gallery-image"
            className="image-category"
            onChange={handleGalleryUpload}
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
          <div className="title text-title">Description</div>
          <div className="description">
            Add some information and manufacturer description from here.
          </div>
        </div>
        <div className="upload-input">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="category-input-data"
            name="name"
          />
          <TextField
            id="outlined-basic"
            label="Website"
            variant="outlined"
            className="category-input-data"
            name="website"
          />
          <TextareaAutosize
            className="category-input-data"
            placeholder="Details"
            name="Description"
          />
        </div>
      </div>

      <div className="submit-btn">
        <Link to="/admin/categories" className="back-btn">
          Back
        </Link>
        <Button className="category-submit" type="submit">
          Add Manufacturer
        </Button>
      </div>
    </form>
  );
}

export default AddManufacturerForm;
