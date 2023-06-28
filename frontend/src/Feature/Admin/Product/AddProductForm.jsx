import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaAutosize } from "@mui/base";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import UploadImage from "../Assets/Images/upload_image.svg";
import DeleteIcon from "@mui/icons-material/Delete";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

AddProductForm.propTypes = {
  onSubmit: PropTypes.func,
};
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
  const schema = yup.object({
    image: yup
      .mixed()
      .test("is-image", "Invalid image format", (value) => {
        if (!value) {
          return true;
        }

        const supportedExtensions = /(png|jpe?g)$/;
        return supportedExtensions.test(value.name.toLowerCase());
      })
      .required("Please upload an image"),

    name: yup.string().required("Please enter the name"),
    icon: yup.string().required("Please select an icon"),
    parent_category: yup.string().required("Please select a parent category"),
    details: yup.string().required("Please enter the details"),
  });

  const form = useForm({
    defaultValues: {
      image: "",
      name: "",
      icon: "",
      parent_category: "",
      details: "",
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
          <div className="title text-title">Featured Image</div>
          <div className="description">
            Upload your product featured image here
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
            form={form}
          />
          <div className="category-image-show">
            {selectedImage && <img src={selectedImage} alt="uploaded image" />}
          </div>
        </div>
      </div>

      <div className="dashed-line"></div>

      <div className="row image-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title">Gallery</div>
          <div className="description">
            Upload your product image gallery here
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
            form={form}
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
          <div className="title text-title">Categories & Manufacture</div>
          <div className="description">
            Select product categories and manufacture from here
          </div>
        </div>
        <div className="upload-input">
          <TextField
            className="category-input-data"
            id="outlined-select-currency"
            select
            defaultValue={[]}
            label="Category"
            name="category"
            multiple
            value={selectedValues}
            onChange={handleCategoryChange}
            SelectProps={{
              multiple: true,
              renderValue: (selected) => selected.join(", "), // Hiển thị các giá trị đã chọn dưới dạng chuỗi
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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

          <TextField
            className="category-input-data"
            id="outlined-select-currency"
            select
            defaultValue=""
            label="Manufacture"
            form={form}
            name="manufacture"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div className="dashed-line"></div>

      <div className="row cate-info-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title">Description</div>
          <div className="description">
            Add your product description and necessary information from here
          </div>
        </div>
        <div className="upload-input">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="category-input-data"
            form={form}
            name="name"
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            className="category-input-data"
            form={form}
            name="price"
            type="number"
          />
          <TextField
            id="outlined-basic"
            label="Sale Price"
            variant="outlined"
            className="category-input-data"
            form={form}
            name="sale_price"
            type="number"
          />
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            className="category-input-data"
            form={form}
            name="quantity"
            type="number"
          />
          <TextareaAutosize
            className="category-input-data"
            placeholder="Details"
            name="details"
            form={form}
          />
          <FormControl className="status">
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Published"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Published"
                control={<Radio />}
                label="Published"
              />
              <FormControlLabel
                value="Draft"
                control={<Radio />}
                label="Draft"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="dashed-line"></div>

      <div className="row cate-info-upload">
        <div className="upload-title col-md-4">
          <div className="title text-title">Attributes</div>
          <div className="description">
            Select your product's attributes from here
          </div>
        </div>
        <div className="upload-input">
          <FormGroup className="attribute">
            <label className="title">Color: </label>
            <FormControlLabel control={<Checkbox />} label="Blue" />
            <FormControlLabel control={<Checkbox />} label="Red" />
          </FormGroup>
        </div>
      </div>

      <div className="submit-btn">
        <Link to="/admin/products" className="back-btn">
          Back
        </Link>

        <Button
          className="product-submit"
          disabled={isSubmitting}
          type="submit"
        >
          Add Product
        </Button>
      </div>
    </form>
  );
}

export default AddProductForm;
