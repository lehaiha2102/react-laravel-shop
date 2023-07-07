import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


function EditGlobalForm() {
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
      fullName: yup
        .string()
        .required("Your name is required")
        .matches(
          /^[a-zA-Z\s]*$/,
          "Your name must only contain letters and spaces"
        )
        .max(255, "Your name must be at most 255 characters long"),
      email: yup
        .string()
        .required("Your email is required")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email format"
        ),
      password: yup
        .string()
        .required("Your password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          "Your password must contain at least 8 characters, including lowercase letters, uppercase letters, and numbers"
        ),
    })
    .required();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      fullName: event.target.elements.fullName.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("No validation errors");
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
          <div className={`${admin.title} ${admin["font-heading"]}`}>Logo</div>
          <div className="description  text-font shawdow-text">
            Upload your website logo here
          </div>
        </div>
        <div className={admin["upload-input"]}>
          <label htmlFor="image-upload-input">
            <img src={UploadImage} alt="upload image" className={admin["upload-icon"]} />
         <div className={`${admin["descriptions"]} ${admin["text-font"]}`}>
             <span className={`${admin["blue-text-font"]} ${admin["upload-image-title"]}`}>
                Upload an image{" "}
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
          <div className="images-show feature-logo">
            {selectedImage && <img src={selectedImage} alt="uploaded image" />}
          </div>
        </div>
      </div>

      <div className={admin["dashed-line"]}></div>

          <div className={admin["image-upload"]}>
         <div className={admin["upload-title"]}>
          <div className="title font-heading font-table-title">Slider</div>
          <div className={`${admin.title} ${admin["text-font "]} ${admin["shawdow-text"]}`}>
            Upload your website slider gallery here
          </div>
        </div>
        <div className={admin["upload-input"]}>
          <label htmlFor="gallery-image-upload-input">
            <img src={UploadImage} alt="upload image" className={admin["upload-icon"]} />
            <div className="descriptions  text-font">
             <span className={`${admin["blue-text-font"]} ${admin["upload-image-title"]}`}>
                Upload an image{" "}
              </span>
              <span>or drag and drop</span>
            </div>
          </label>
          <input
            type="file"
            id="gallery-image-upload-input"
            name="galleryImage"
                      className={`${admin["input-data"]} ${admin["image-category"]}`}

            onChange={handleGalleryUpload}
            multiple
          />
          <div className="images-show ">
            {selectedGallery.map((image, index) => (
              <img
                className="gallery-image-item"
                key={index}
                src={image}
                alt={`uploaded image ${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={admin["dashed-line"]}></div>
    <div className={admin['cate-info-upload']}>
         <div className={admin["upload-title"]}>
          <div className={`${admin.title} ${admin["font-heading"]}`}>Description</div>
          <div className={`${admin.title} ${admin["text-font "]} ${admin["shawdow-text"]}`}>
            Add website description and necessary information from here
          </div>
        </div>
        <div className={admin["upload-input"]}>
          <input
            type="text"
            className={admin["input-data"]}
            name="name"
            placeholder="Full Name"
          />
          <input
            type="text"
            className={admin["input-data"]}
            name="address"
            placeholder="Address"
          />
          <input
            type="text"
            className={admin["input-data"]}
            name="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div className={admin["dashed-line"]}></div>
    <div className={admin['cate-info-upload']}>
         <div className={admin["upload-title"]}>
          <div className={`${admin.title} ${admin["font-heading"]}`}>
            Social networks of the website
          </div>
          <div className={`${admin.title} ${admin["text-font "]} ${admin["shawdow-text"]}`}>
            Add links to your social network pages if available
          </div>
        </div>
        <div className={admin["upload-input"]}>
          <input
            type="text"
            className={admin["input-data"]}
            name="facebook"
            placeholder="Facebook"
          />
          <input
            type="text"
            className={admin["input-data"]}
            name="instagram"
            placeholder="Instagram"
          />
          <input
            type="text"
            className={admin["input-data"]}
            name="twitter"
            placeholder="Twitter"
          />
        </div>
      </div>

      <div className="submit-btn">
        <Link to="/admin/customers" className="btn-white">
          Back
        </Link>
        <button className="btn-blue" type="submit">
          Add Customer
        </button>
      </div>
    </form>
  );
}

export default EditGlobalForm;
