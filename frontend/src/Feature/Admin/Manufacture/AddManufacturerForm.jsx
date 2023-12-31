import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";

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

  const schema = yup
    .object({
      name: yup
        .string()
        .required("Please enter manufacturer name")
        .max(255, "Manufacturer name should not exceed 255 characters")
        .matches(
          /^[A-Za-z ]*$/,
          "Manufacturer name should only contain letters and spaces"
        ),
      image: yup
        .mixed()
        .test(
          "fileFormat",
          "Manufacturer logo must be in JPG or PNG format",
          (value) => {
            if (value) {
              const fileExtensions = ["jpg", "png"];
              const extension = value.name.split(".").pop();
              return fileExtensions.includes(extension.toLowerCase());
            }
            return true;
          }
        )
        .test("fileDimensions", "Dimension should be 160 x 160 px", (value) => {
          if (value && value.type.includes("image")) {
            const img = new Image();
            img.src = URL.createObjectURL(value);

            return new Promise((resolve, reject) => {
              img.onload = function () {
                if (this.width === 160 && this.height === 160) {
                  resolve(true);
                } else {
                  reject(false);
                }
              };
              img.onerror = function () {
                reject(false);
              };
            });
          }
          return true;
        })
        .required("Please enter manufacturer logo"),
      convertImage: yup
        .mixed()
        .test(
          "fileFormat",
          "Manufacturer convert image must be in JPG or PNG format",
          (value) => {
            if (value) {
              const fileExtensions = ["jpg", "png"];
              const extension = value.name.split(".").pop();
              return fileExtensions.includes(extension.toLowerCase());
            }
            return true;
          }
        )
        .test("fileDimensions", "Dimension should be 960 x 340 px", (value) => {
          if (value && value.type.includes("image")) {
            const img = new Image();
            img.src = URL.createObjectURL(value);

            return new Promise((resolve, reject) => {
              img.onload = function () {
                if (this.width === 960 && this.height === 340) {
                  resolve(true);
                } else {
                  reject(false);
                }
              };
              img.onerror = function () {
                reject(false);
              };
            });
          }
          return true;
        })
        .required("Please enter manufacturer convert image"),
      website: yup
        .string()
        .required("Please enter manufacturer website link")
        .matches(
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
          "Please enter a valid website URL"
        ),
      email: yup
        .string()
        .required("Please enter manufacturer email")
        .email("Please enter a valid email address"),
      phone: yup
        .string()
        .required("Please enter manufacturer phone number")
        .matches(/^[0-9]{10}$/, "Please enter a valid phone number"),
      address: yup.string().required("Please enter manufacturer address"),
      description: yup
        .string()
        .required("Please enter manufacturer description")
        .min(100, "Manufacturer description is too short"),
    })
    .required();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      image: event.target.elements.image.files[0],
      convertImage: event.target.elements.convertImage.files[0],
      website: event.target.elements.website.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      address: event.target.elements.address.value,
      description: event.target.elements.description.value,
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
          <div
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}
          >
            Logo
          </div>
          <div
            className={`${admin.title} ${admin["text-font "]} ${admin["shawdow-text"]}`}
          >
            Upload your Manufacturer/Publication logo from here. Dimension
            should be 160 x 160 px.
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

      <div className={admin["image-upload"]}>
        <div className={admin["upload-title"]}>
          <div
            className={`${admin.title} ${admin["font-heading"]} ${admin["font-table-title"]}`}
          >
            Cover Image
          </div>
          <div
            className={`${admin.title} ${admin["text-font "]} ${admin["shawdow-text"]}`}
          >
            Upload your Manufacturer/Publication cover image from here,
            Dimension should be 960 x 340 px.
          </div>
        </div>
        <div className={admin["upload-input"]}>
          <label htmlFor="gallery-image-upload-input">
            <img
              src={UploadImage}
              alt="upload image"
              className={admin["upload-icon"]}
            />
            <div className={`${admin["descriptions"]} ${admin["text-font"]}`}>
              <span
                className={`${admin["blue-text-font"]} ${admin["upload-image-title"]}`}
              >
                Upload an image{" "}
              </span>
              <span>or drag and drop</span>
            </div>
          </label>
          <input
            type="file"
            id="gallery-image-upload-input"
            name="convertImage"
            className={`${admin["input-data"]} ${admin["image-category"]}`}
            onChange={handleGalleryUpload}
          />
          <div className="images-show feature-logo">
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
           Description
          </div>
          <div
            className={`${admin.description} ${admin.textFont} ${admin.shawdowText}`}
          >
           Add some information and manufacturer description from here.
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
            placeholder="Website"
            variant="outlined"
            className={admin["input-data"]}
            name="website"
          />
          <input
            id="outlined-basic"
            placeholder="Email"
            variant="outlined"
            className={admin["input-data"]}
            name="email"
          />
          <input
            id="outlined-basic"
            placeholder="Phone"
            variant="outlined"
            className={admin["input-data"]}
            name="phone"
          />
          <input
            id="outlined-basic"
            placeholder="Address"
            variant="outlined"
            className={admin["input-data"]}
            name="address"
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

export default AddManufacturerForm;
