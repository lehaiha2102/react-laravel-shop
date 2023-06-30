import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { LoadingHelper } from "../../../Helpers/loading";
import Loading from "../../../components/layout/support_layout/Loading/Loading";

function SignupForm() {
  const isLoading = LoadingHelper(true, 3000)

  if (isLoading) {
    return <div><Loading/></div>; 
  }

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Your name is required')
      .matches(/^[a-zA-Z\s]*$/, 'Your name must only contain letters and spaces')
      .max(255, 'Your name must be at most 255 characters long'),
    email: yup
      .string()
      .required('Your email is required')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format'
      ),
    password: yup
      .string()
      .required('Your password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Your password must contain at least 8 characters, including lowercase letters, uppercase letters, and numbers'
      ),
  });  

    const handleSignUpSubmit = async (event) => {
      event.preventDefault();
      const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
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
    <div className="container">
       <ToastContainer />
      <form  className="auth-form" onSubmit={handleSignUpSubmit}>
        <div className="cart">
          <div className="logo">
            <img
              src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
              alt="logo"
            />
            <span className="form-title">Register new account</span>
          </div>

          <input
            id="outlined-basic"
            placeholder="Name"
            variant="outlined"
            className="signup-name"
            name="name"
          />
          <input
            id="outlined-basic"
            placeholder="Email"
            variant="outlined"
            className="signup-email"
            name="email"
          />
          <input
            id="outlined-basic"
            placeholder="Password"
            variant="outlined"
            className="signup-password"
            name="password"
            type="password"
          />
          <Button className="login-submit" type="submit">
            Sign Up
          </Button>

          <span className="other-option">Or</span>
          <span className="register-option">
            <p className="register-text">Already have an account?  </p>
            <Link
              className="register-link"
              to="/login"
            >
              Login now
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
