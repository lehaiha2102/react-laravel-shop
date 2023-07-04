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

function AddCustomerForm() {
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
      <div className="cate-info-upload">
        <div className="upload-title">
          <div className="title font-table-title">Description</div>
          <div className="description text-font shawdow-text">
            Add customer description and necessary information from here
          </div>
        </div>
        <div className="upload-input">
          <input
            type="text"
            className="input-data"
            name="fullName"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="input-data"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            className="input-data"
            name="password"
            placeholder="Password"
          />
          <select name="role" id="" className="input-data">
            <option value="1" selected>
              User
            </option>
            <option value="2">Admin</option>
          </select>
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

export default AddCustomerForm;
