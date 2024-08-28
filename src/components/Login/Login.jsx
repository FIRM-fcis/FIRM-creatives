import React, { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useJwt } from "react-jwt";
import handelApi from "../../Shares/handelApiCalls";
import { AppContext } from "../../Providers/AppProvider";
const Login = ({
  setShowSign,
  sign,
  handleSign,
  setinfoPage,
  handleNav,
  information,
  setInformation,
}) => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    // captcha: ''
  });
  const [errors, setErrors] = useState({});
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormCleared, setIsFormCleared] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = "http://localhost:3000/api/v1";
  const decodedTokenRef = useRef(null);
  const navigate = useNavigate();
  const { setToken, token } = useContext(AppContext);
  const { decodedToken, isExpired } = useJwt(token);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    decodedTokenRef.current = decodedToken;
  }, [decodedToken]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setLoading(true);
    const validationErrors = {};
    if (sign === "SIGN UP") {
      if (formData.username.length < 3 || formData.username.length > 30) {
        validationErrors.username =
          "Username must be between 3 and 30 characters";
      } else if (!formData.username.trim()) {
        validationErrors.username = "Username is required";
      }
      if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "password not matched";
      }
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(
        formData.password
      )
    ) {
      validationErrors.password =
        "  8 to 24 characters.\nMust include uppercase and lowercase letters, a number and a special character.\n  Allowed special characters: ! @ # $ %";
    }

    setErrors(validationErrors);
    if (
      (Object.keys(validationErrors).length === 0 &&
        isCaptchaVerified &&
        sign === "SIGN UP") ||
      (Object.keys(validationErrors).length === 0 && sign === "LOGIN")
    ) {
      try {
        const url =
          sign === "SIGN UP"
            ? `${API_BASE_URL}/auth/signup`
            : `${API_BASE_URL}/auth/login`;

        const loginData =
          sign === "LOGIN"
            ? { email: formData.email, password: formData.password }
            : formData;
        const response = await axios.post(url, loginData, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200 || response.status === 201) {
          console.log(response);
          if (sign === "LOGIN") {
            // tokenRef.current = response.data.body.access_token;
            const t = response.data.body.access_token;

            // Store the token in state and localStorage
            setToken(t);
            localStorage.setItem("authToken", rememberMe ? t : "");
            // If the token is valid, you can use the decodedToken for your needs
            console.log("test");

            decodedTokenRef.current = decodedToken;

            if (!decodedTokenRef.current) {
              return <div>Loading...</div>;
            }
            const userId = decodedToken?.id;
            const userEmail = decodedToken?.email;
            console.log("Decoded token:", decodedToken);
            console.log("User ID:", userId);
            console.log("User Email:", userEmail);
            localStorage.setItem("userId", rememberMe ? userId : "");
            try {
              const response = await axios.get(
                `${API_BASE_URL}/users/${userId}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              console.log(response.data.body[0]);
              setInformation({
                ...information,
                ...response.data.body[0],
              });
              handleNav(true);
              navigate("/home");
            } catch (error) {
              console.error("Authentication error:", error);
              // localStorage.removeItem('authToken');
              // localStorage.removeItem('userId');
            }
          }
          console.log(`${sign} successful!`, response.data);
          const successMessage =
            sign === "SIGN UP"
              ? "Signup successful! Please check your email for verification."
              : "Login successful!";

          Swal.fire({
            title: successMessage,
            icon: "success",
            timer: 10000,
          });

          setIsFormCleared(true);
          setShowSign(false);
          if (sign === "LOGIN") {
            // try {
            //     const emailVer = await axios.get(`${API_BASE_URL}/auth/verify/${token}`, {
            //         headers: { 'Content-Type': 'application/json' },
            //         });
            //     console.log(emailVer);
            //     Swal.fire({
            //         title: response.data.message,
            //         icon: 'success',
            //         timer: 10000,
            //     });
            //     setShowSign(false);
            // } catch (error) {
            //     Swal.fire({
            //         icon: "error",
            //         title: "Oops...",
            //         text:  error.response.data.message ,
            // });
            // }
            handleNav(true);
            navigate("/home");
          } else {
            setinfoPage(true);
            const rightNow = new Date().toISOString();
            const formattedJoiningDate =
              rightNow.substring(0, rightNow.length - 1) + "106Z";
            setInformation({
              ...information,
              username: formData.username,
              email: formData.email,
              joiningDate: formattedJoiningDate,
            });
          }
          // setformData({
          //     username: '',
          //     email: '',
          //     password: '',
          //     confirmPassword: '',
          //     captcha: '',
          // });
        } else {
          throw new Error(response.statusText || "Network response was not ok");
        }
      } catch (error) {
        console.error("Error:", error);
        const errorData = error.response?.data;
        setErrors({
          apiError:
            errorData?.message || "An error occurred during submission.",
        });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorData?.message,
        });
      } finally {
        setIsSubmitting(false);
        setLoading(false);
      }
    } else {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsFormCleared(false);
    const storedToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");

    const handleLoginRedirect = async () => {
      if (storedToken) {
        try {
          const response = await axios.get(`${API_BASE_URL}/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          console.log(response.data.body[0]);
          setInformation({ ...information, ...response.data.body[0] });
          handleNav(true);
          navigate("/home");
        } catch (error) {
          console.error("Authentication error:", error);
          // localStorage.removeItem('authToken');
          // localStorage.removeItem('userId');
        }
      }
    };

    handleLoginRedirect();
  }, []);

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(value);
  };

  return (
    <div className="log-in">
      <form
        className="login-container"
        onSubmit={handleSubmit}
        action={
          sign === "SIGN UP"
            ? `${API_BASE_URL}/auth/signup`
            : `${API_BASE_URL}/auth/login`
        }
        method="POST"
      >
        <div className="login-title">
          <span className="text-center">{sign}</span>
          <p className="close-login" onClick={() => setShowSign(false)}>
            X
          </p>
        </div>
        {sign === "LOGIN" ? (
          <></>
        ) : (
          <div className="input-container">
            <input
              type="text"
              required
              name="username"
              value={isFormCleared ? "" : formData.username}
              onChange={handlechange}
            />
            <label className="info-label">UserName</label>
            {errors.username && <span>{errors.username}</span>}
          </div>
        )}
        <div className="input-container">
          <input
            type="email"
            required
            name="email"
            value={isFormCleared ? "" : formData.email}
            onChange={handlechange}
          />
          <label className="info-label">Email</label>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="input-container">
          <input
            type="password"
            required
            name="password"
            value={isFormCleared ? "" : formData.password}
            onChange={handlechange}
          />
          <label className="info-label">Password</label>
          {errors.password && <span>{errors.password}</span>}
        </div>
        {sign === "LOGIN" ? (
          <div className="checkbox">
            <input
              type="checkbox"
              className="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="info-label">Remember Me</label>
          </div>
        ) : (
          <div className="input-container">
            <input
              type="password"
              required
              name="confirmPassword"
              value={isFormCleared ? "" : formData.confirmPassword}
              onChange={handlechange}
            />
            <label className="info-label">Confirm Password</label>
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
        )}
        {sign === "LOGIN" ? (
          <div className="forgot-password-container">
            <Link to="/forgetPassword">Forgot password?</Link>
          </div>
        ) : (
          <>
            <div className="recaptcha-container">
              <ReCAPTCHA
                name="captcha"
                sitekey="6LdQuxsqAAAAAKjcPsxeplE_XmYviiiES8sL_vcE"
                onChange={handleCaptchaChange}
              />
            </div>
            {!isCaptchaVerified && (
              <p className="captcha-error">
                Please complete the captcha to submit the form.
              </p>
            )}
          </>
        )}
        {sign === "LOGIN" ? (
          <p>
            Create a new account?{" "}
            <span className="switch" onClick={() => handleSign("SIGN UP")}>
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span className="switch" onClick={() => handleSign("LOGIN")}>
              Login here
            </span>
          </p>
        )}

        <button
          type="submit"
          className="login-btn"
          disabled={
            sign === "SIGN UP"
              ? !isCaptchaVerified || isSubmitting
              : isSubmitting
          }
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Login;
