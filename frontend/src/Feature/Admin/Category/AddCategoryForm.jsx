import { TextareaAutosize } from "@mui/base";
import { Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link } from "react-router-dom";
import UploadImage from "../Assets/Images/upload_image.svg";

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
  
  return (
    <form>
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
            className="image-category"
            onChange={handleImageUpload}
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
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="category-input-data"
            name="name"
          />
          <TextField
            className="category-input-data"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            label="Select Icon"
            name="icon"
          >
            <MenuItem defaultValue="--Select--"></MenuItem>
          </TextField>
          <TextField
            className="category-input-data"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            label="Parent Category"
            name="parent_category"
          >
            <MenuItem defaultValue="--Select--"></MenuItem>
          </TextField>
          <TextareaAutosize
            className="category-input-data"
            placeholder="Details"
            name="details"
          />
        </div>
      </div>

      <div className="submit-btn">
        <Link to="/admin/categories" className="back-btn">
          Back
        </Link>
        <Button className="category-submit" type="submit">
          Add Category
        </Button>
      </div>
    </form>
  );
}

export default AddCategoryForm;
