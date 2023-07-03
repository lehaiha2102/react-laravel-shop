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

function AddCouponForm() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [numberOfCodes, setNumberOfCodes] = useState(0);
    const [couponCodes, setCouponCodes] = useState([]);
    const [showAllCodes, setShowAllCodes] = useState(false);

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
  
      console.log(numberOfCodes);
  
      const updatedCodes = Array(count).fill('');
      setCouponCodes(updatedCodes);
    };
  
    const handleCodeChange = (event, index) => {
      const updatedCodes = [...couponCodes];
      updatedCodes[index] = event.target.value;
      setCouponCodes(updatedCodes);
    };
  
    const handleShowAllCodes = () => {
      setShowAllCodes(true);
    };
  
    const generateCode = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const codeLength = 20;
  
      const updatedCodes = couponCodes.map((code) => {
        if (code === '') {
          let generatedCode = '';
          let isUnique = false;
  
          while (!isUnique) {
            for (let j = 0; j < codeLength; j++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              generatedCode += characters.charAt(randomIndex);
            }
  
            if (!couponCodes.includes(generatedCode)) {
              isUnique = true;
            }
          }
  
          return generatedCode;
        }
  
        return code;
      });
  
      setCouponCodes(updatedCodes);
    };
  
  
    const filteredCouponCodes = showAllCodes ? couponCodes : couponCodes.slice(0, 10);
  
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
        <form >
        <div className="row image-upload">
          <div className="upload-title col-md-4">
            <div className="title text-title">Image</div>
            <div className="description">Upload your coupon image here</div>
          </div>
          <div className="upload-input">
            <label htmlFor="image-upload-input">
              <img
                src={UploadImage}
                alt="upload image"
                className="upload-icon"
              />
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
              {selectedImage && (
                <img src={selectedImage} alt="uploaded image" />
              )}
            </div>
          </div>
        </div>

        <div className="dashed-line"></div>
        <div className="row cate-info-upload">
          <div className="upload-title col-md-4">
            <div className="title text-title">Description</div>
            <div className="description">
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
        name="code"
        type="number"
        defaultValue={0}
        inputProps={{ min: 0}}
        onChange={handleNumberOfCodesChange}
      />
      <Button onClick={generateCode} className="random-code">
        <TouchAppIcon/>
      </Button>
      </div>
      {filteredCouponCodes.map((code, index) => (
          <TextField
            key={index}
            id={`code-${index}`}
            label="Code"
            variant="outlined"
            className="input-data"
            value={code}
            name={`code-${index}`}
            onChange={(event) => handleCodeChange(event, index)}
          />
        ))}
        {!showAllCodes && couponCodes.length > 10 && (
          <Button onClick={handleShowAllCodes} className="show-more-button">
            Show more
          </Button>
        )}
            <TextareaAutosize
              className="input-data"
              placeholder="Description"
              name="description"
            />

            <FormControl className="status">
              <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Published"
                name="radio-buttons-group"
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
              name="code"
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
                <FormLabel id="demo-radio-buttons-group-label">
                  Active From
                </FormLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="input-data active-form"

                  name="code"
                  type="date"
                />
              </div>
              <div className="field-1">
                <FormLabel id="demo-radio-buttons-group-label">
                  Will Expire
                </FormLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="input-data will-expire"

                  name="code"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="submit-btn">
          <Link to="/admin/categories" className="back-btn">
            Back
          </Link>
          <Button
            className="category-submit"

            type="submit"
          >
            Add Coupon
          </Button>
        </div>
      </form>
     );
}

export default AddCouponForm;