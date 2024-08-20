import React, { useEffect, useState } from 'react'
import './Login.css'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = ({ setShowSign, sign, handleSign,setinfoPage,handleNav,information,setInformation }) => {
    const [formData, setformData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        captcha: ''
    })
    const [errors, setErrors] = useState({})
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormCleared, setIsFormCleared] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const API_BASE_URL = 'http://localhost:3000/api/v1';
    const navigate = useNavigate();

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        const validationErrors = {}
        if (!formData.username.trim()) {
            validationErrors.username = "username is required"
        }

        if (!formData.email.trim()) {
            validationErrors.email = "email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "email is not valid"
        }

        if (!formData.password.trim()) {
            validationErrors.password = "password is required"
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(formData.password)) {
            validationErrors.password = "  8 to 24 characters.\nMust include uppercase and lowercase letters, a number and a special character.\n  Allowed special characters: ! @ # $ %"
        }

        if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = "password not matched"
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0 && isCaptchaVerified) {
            Swal.fire({
                title: "Signup successful!",
                text: "Please check your email for verification",
                icon: "success",
                timer: 10000,
              });
            setIsSubmitting(true); 
            setIsFormCleared(true);
            setShowSign(false);
            handleNav(true);
            const rightNow = new Date().toISOString();
            const formattedJoiningDate = rightNow.substring(0, rightNow.length - 1) + '106Z';
            setInformation({...information,username:formData.username,email:formData.email,joiningDate:formattedJoiningDate})
            if(sign === "LOGIN"){
                navigate('/home');
               }
               else{
                setinfoPage(true);
               }
               setformData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                captcha: '',
            });
            try {
                const url = sign === 'SIGN UP'? `${API_BASE_URL}/auth/signup` :`${API_BASE_URL}/auth/login`;
                const response = await axios.post(url, formData, {
                    headers: { 'Content-Type': 'application/json' },
                });
                if (response.status === 200 || response.status === 201) {
                  const token = response.data.token;
                  if (rememberMe) {
                    localStorage.setItem('authToken', token);
                  }
                    console.log(`${sign} successful!`, response.data);
                    Swal.fire({
                        title: "Signup successful!",
                        text: "Please check your email for verification",
                        icon: "success",
                        timer: 10000,
                      });
                    setIsSubmitting(true); 
                    setIsFormCleared(true);
                    setShowSign(false);
                    handleNav(true);
                    const rightNow = new Date().toISOString();
                    const formattedJoiningDate = rightNow.substring(0, rightNow.length - 1) + '106Z';
                    setInformation({...information,username:formData.username,email:formData.email,joiningDate:formattedJoiningDate})
                    if(sign === "LOGIN"){
                        navigate('/home');
                       }
                       else{
                        setinfoPage(true)
                       }
                    setformData({
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        captcha: '',
                    });
                } else {
                    throw new Error(response.statusText || 'Network response was not ok');
                }
            } catch (error) {
                console.error('Error:', error);
                const errorData = error.response?.data;
                setErrors({ apiError: errorData?.message || 'An error occurred during submission.' });
            } finally {
                setIsSubmitting(false);
                setLoading(false);
            }
          } else {
            setLoading(false); 
          }
        };

    useEffect(() => {
        setIsFormCleared(false);
    }, []);

    useEffect(() => {
      const storedToken = localStorage.getItem('authToken');
      if (storedToken) {
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/auth/me', {
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            });
          } catch (error) {
            console.error('Authentication error:', error);
            localStorage.removeItem('authToken');
          }
        };
  
        fetchData();
      }
    }, []);

    const handleCaptchaChange = (value) => {
        setIsCaptchaVerified(value);
    };
    useEffect(() => {
        const checkEmailAvailability = async () => {
            if (formData.email.trim() && sign === 'SIGN UP') {
                try {
                    const response = await fetch(`/api/users/check-email?email=${formData.email}`);
                    const data = await response.json();
                    if (data.isRegistered) {
                        setErrors({ email: 'Email is already registered.' });
                    }
                } catch (error) {
                    console.error('Error checking email availability:', error);
                }
            }
        };
        checkEmailAvailability();
    }, [formData.email, sign]);


    return (
        <div className='log-in'>
            <form className="login-container" onSubmit={handleSubmit}>
                <div className="login-title">
                    <span className='text-center'>{sign}</span>
                    <p className='close-login' onClick={() => setShowSign(false)}>X</p>
                </div>
                {sign === "LOGIN" ? <></>
                    : <div className='input-container'>
                        <input type="text" required name='username' value={isFormCleared ? '' : formData.username} onChange={handlechange} />
                        <label className='info-label'>UserName</label>
                        {errors.username && <span>{errors.username}</span>}
                    </div>
                }
                <div className='input-container'>
                    <input type="email" required name='email' value={isFormCleared ? '' : formData.email} onChange={handlechange} />
                    <label className='info-label'>Email</label>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className='input-container'>
                    <input type="password" required name='password' value={isFormCleared ? '' : formData.password} onChange={handlechange} />
                    <label className='info-label'>Password</label>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                {sign === "LOGIN" ?
                    <div className='checkbox'>
                        <input type="checkbox" className='rememberMe' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                        <label className='info-label'>Remember Me</label>
                    </div>
                    : <div className='input-container'>
                        <input type="password" required name='confirmPassword' value={isFormCleared ? '' : formData.confirmPassword} onChange={handlechange} />
                        <label className='info-label'>Confirm Password</label>
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                }
                {sign === "LOGIN" ?
                    <div className='forgot-password-container'>
                        <Link to='/forgetPassword'>Forgot password?</Link>
                    </div>
                    :
                    <>
                       <div className="recaptcha-container">
                            <ReCAPTCHA
                                name='captcha'
                                sitekey="6LdQuxsqAAAAAKjcPsxeplE_XmYviiiES8sL_vcE"
                                onChange={handleCaptchaChange}
                            />
                        </div>
                        {!isCaptchaVerified && <p className="captcha-error">Please complete the captcha to submit the form.</p>}
                    </>
                }
                {sign === "LOGIN" ?
                    <p>Create a new account? <span className='switch' onClick={() => handleSign("SIGN UP")}>Click here</span></p>
                    : <p>Already have an account? <span className='switch' onClick={() => handleSign("LOGIN")}>Login here</span></p>

                }

                <button
                    type="submit"
                    className='login-btn'
                    disabled={!isCaptchaVerified || isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default Login