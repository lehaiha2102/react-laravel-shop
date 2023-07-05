import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";
import { toast } from 'react-toastify';

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
      .matches(/^[A-Za-z ]*$/, "Category name should only contain letters and spaces"),
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
        console.log('No validation errors');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="image-upload">
        <div className="upload-title">
          <div className="title font-heading">Image</div>
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
            className="input-data image-category"
            onChange={handleImageUpload}
          />
          <div className="images-show feature-logo">
            {selectedImage && <img src={selectedImage} alt="uploaded image" />}
          </div>
        </div>
      </div>

      <div className="dashed-line"></div>
      <div className="row cate-info-upload">
        <div className="upload-title">
          <div className="title font-heading">Description</div>
          <div className="description">
            Add your category details and necessary information from her
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
          <select name="icon" id=""  className="input-data">
            <option value="">Select Icon</option>
          </select>
          <select name="parent_category" id=""  className="input-data">
            <option value="">Select Parent Category</option>
          </select>
          <textarea name="description" id="" cols="30" rows="10" defaultValue="Description"  className="input-data"></textarea>
        </div>
      </div>

      <div className="submit-btn">
        <Link to="/admin/categories" className="btn-white">
          Back
        </Link>
        <Button className="btn-blue" type="submit">
          Add Category
        </Button>
      </div>
    </form>
  );
}

export default AddCategoryForm;
