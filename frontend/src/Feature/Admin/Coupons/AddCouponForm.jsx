import { TextareaAutosize } from "@mui/base";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import UploadImage from "../Assets/Images/upload_image.svg";
import { toast } from "react-toastify";
import * as yup from "yup";

function AddCouponForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [numberOfCodes, setNumberOfCodes] = useState(0);
  const [couponCodes, setCouponCodes] = useState([]);
  const [showAllCodes, setShowAllCodes] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isGeneratingCodes, setIsGeneratingCodes] = useState(false);

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

  const handleNumberOfCodesChange = (event) => {
    const count = parseInt(event.target.value);
    const maxValue = 300;
    if (count < 0) {
      setNumberOfCodes(0);
    } else if (count > maxValue) {
      setNumberOfCodes(maxValue);
    } else {
      setNumberOfCodes(count);
    }

    const updatedCodes = Array(count).fill("");
    setCouponCodes(updatedCodes);
  };

  const handleCodeChange = (event, index) => {
    const updatedCodes = [...couponCodes];
    updatedCodes[index] = event.target.value;
    setCouponCodes(updatedCodes);
  };

  const handleShowAllCodes = () => {
    const totalPages = Math.ceil(couponCodes.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const generateCode = async () => {
    if (couponCodes.length >= 10001) {
      toast.error("Code quantity has reached the limit of 10000");
      return;
    }

    setIsGeneratingCodes(true);

    try {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const codeLength = 20;

      const updatedCodes = await Promise.all(
        couponCodes.map(async (code) => {
          if (code === "") {
            let generatedCode = "";
            let isUnique = false;

            while (!isUnique) {
              for (let j = 0; j < codeLength; j++) {
                const randomIndex = Math.floor(
                  Math.random() * characters.length
                );
                generatedCode += characters.charAt(randomIndex);
              }

              if (!couponCodes.includes(generatedCode)) {
                isUnique = true;
              }
            }

            return generatedCode;
          }

          return code;
        })
      );

      const limitedCodes = updatedCodes.slice(0, 1000);
      setCouponCodes(limitedCodes);
    } catch (error) {
      console.error("Error generating codes:", error);
      toast.error("An error occurred while generating codes");
    }

    setIsGeneratingCodes(false);
  };

  const filteredCouponCodes = showAllCodes
    ? couponCodes
    : couponCodes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

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
      image: yup
        .string()
        .required("Please enter product image")
        .matches(/\.(jpg|png)$/, "Product image must be in JPG or PNG format"),
      activeDay: yup.string().required("Please enter active coupon day"),
      willExpire: yup.string().required("Please enter expire coupon day"),
      codeQuantity: yup
        .number()
        .typeError("Please enter a valid code quantity")
        .required("Please enter code quantity")
        .max(1000, "Code quantity cannot exceed 1000"),
      type: yup.string().required("Please enter coupons type"),
      minimunCartAmount: yup.number().required('Please enter minumun cart amount').min(1, "Minimun cart amount is 1"),
    })
    .required();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      image: event.target.elements.image.files[0],
      activeDay: event.target.elements.activeDay.value,
      willExpire: event.target.elements.willExpire.value,
      codeQuantity: event.target.elements.codeQuantity.value,
      type: event.target.elements.type.value,
      minimunCartAmount: event.target.elements.minimunCartAmount.value,
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
      <div className="image-upload">
        <div className="upload-title">
          <div className="title font-table-title">Image</div>
          <div className="description text-font shawdow-text">
            Upload your coupon image here
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
          <div className="images-show">
            {selectedImage && <img src={selectedImage} alt="uploaded image" />}
          </div>
        </div>
      </div>

      <div className="dashed-line"></div>
      <div className="cate-info-upload">
        <div className="upload-title">
          <div className="title font-table-title">Description</div>
          <div className="description text-font shawdow-text">
            Add your coupon description and necessary information from here
          </div>
        </div>
        <div className="upload-input">
          <div className="text-field">
            <TextField
              id="outlined-basic"
              label="Number of coupon codes"
              variant="outlined"
              className="input-data"
              name="codeQuantity"
              type="number"
              defaultValue={0}
              inputProps={{ min: 0 }}
              onChange={handleNumberOfCodesChange}
            />
            <Button
              onClick={generateCode}
              className="random-code"
              disabled={isGeneratingCodes}
            >
              <TouchAppIcon />
            </Button>
          </div>
          {filteredCouponCodes.map((code, index) => {
            const codeIndex = (currentPage - 1) * itemsPerPage + index;
            return (
              <TextField
                key={index}
                id={`code-${index}`}
                label="Code"
                variant="outlined"
                className="input-data"
                value={code}
                name="code"
                onChange={(event) => handleCodeChange(event, codeIndex)}
              />
            );
          })}
          {!showAllCodes && couponCodes.length > itemsPerPage && (
            <Button onClick={handleShowAllCodes} className="show-more-button">
              Show more
            </Button>
          )}
          <FormControl className="status">
            <FormLabel
              id="demo-radio-buttons-group-label"
              className=" text-font shawdow-text"
            >
              Type
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Published"
              name="type"
            >
              <FormControlLabel
                value="Fixed"
                control={<Radio />}
                label="Fixed"
              />
              <FormControlLabel
                value="Percentage"
                control={<Radio />}
                label="Percentage"
              />
              <FormControlLabel
                value="Free Shipping"
                control={<Radio />}
                label="Free Shipping"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            id="outlined-basic"
            label="Minimum cart amount (USD)"
            variant="outlined"
            className="input-data"
            name="minimunCartAmount"
            type="number"
            defaultValue={0}
          />
          <TextareaAutosize
            className="input-data"
            placeholder="Details"
            name="details"
          />

          <div className="text-field">
            <div className="field-1">
              <label htmlFor="active-date">Active Date</label>
              <input
                id="active-date"
                variant="outlined"
                className="input-data"
                name="activeDay"
                type="date"
              />
            </div>
            <div className="field-1">
              <label htmlFor="willExpire">Will Expire</label>
              <input
                id="willExpire"
                variant="outlined"
                className="input-data will-expire"
                name="willExpire"
                type="date"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="submit-btn">
        <Link to="/admin/coupons" className="btn-white">
          Back
        </Link>
        <button className="btn-blue" type="submit">
          Add Coupon
        </button>
      </div>
    </form>
  );
}

export default AddCouponForm;
