import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

function AddCustomerForm() {

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
