import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { LoadingHelper } from "../../../Helpers/loading";
import Loading from "../../../components/layout/support_layout/Loading/Loading";

function LoginForm() {
  const  isLoading = LoadingHelper(true, 3000);

  if (isLoading) {
    return <div><Loading/></div>; 
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Your email is required'),
    password: yup
      .string()
      .required('Your password is required')
  });  

    const handleLoginSubmit = async (event) => {
      event.preventDefault();
      const formData = {
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
    <div className="auth-container">
      <ToastContainer />
      <form className="auth-form" onSubmit={handleLoginSubmit}>
        <div className="cart">
          <div className="logo">
            <img
              src="https://pickbazar-react-admin-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
              alt="logo"
            />
            <span className="form-title">Login</span>
          </div>

          <input
            id="outlined-basic"
            placeholder="Email"
            variant="outlined"
            className="login-email"
            name="email"
          />
          <input
            id="outlined-basic"
            placeholder="Password"
            variant="outlined"
            className="login-password"
            name="password"
            type="password"
          />
          <Link to="" className="forgot-password">
            Forgot password?
          </Link>
          <Button className="login-submit" type="submit">
            Login
          </Button>

          <span className="other-option">Or</span>
          <span className="register-option">
            <p className="register-text">Don't have any account? </p>
            <Link
              className="register-link"
              to="/sign-up"
            >
              Register now
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
