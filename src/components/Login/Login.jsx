import React, { useEffect, useState } from 'react'
import './Login.css'
import ReCAPTCHA from "react-google-recaptcha";
const Login = ({setShowSign,sign,handleSign}) => {
  const [formData,setformData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    captcha:''
    })
  const [errors, setErrors] = useState({})
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [emailVerification, setemailVerfication] = useState('');

  const handlechange=(e)=>{
    const{name,value}=e.target;
    setformData({
      ...formData,[name]:value
    })
  } 
  const handleSubmit =async (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = "username is required"
        setemailVerfication('');
    }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
        setemailVerfication('');
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }
    
    if(!formData.password.trim()) {
      validationErrors.password = "password is required"
      setemailVerfication('');
  } else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(formData.password)){
      validationErrors.password = "  8 to 24 characters.\nMust include uppercase and lowercase letters, a number and a special character.\n  Allowed special characters: ! @ # $ %"
  }

    if(formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "password not matched"
        setemailVerfication('');
    }
    
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0 && isCaptchaVerified) {
      setemailVerfication('Signup successful! Please check your email for verification.');
      setIsSubmitting(true); 

      try {
        const response = await fetch(
          sign === 'SIGN UP' ? '/api/auth/signup' : '/api/auth/login', 
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) {
          const errorData = await   
          response.json();
          throw new Error(errorData.message || 'Network response was not ok');   

        }

        const data = await response.json();
        if (sign === 'SIGN UP') {
          console.log('Signup successful:', data);
          setemailVerfication('Signup successful! Please check your email for verification.');
          setformData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            captcha: '',
          });
        } else {
          console.log('Login successful:', data);
        }
        setIsSubmitting(false); 
      } catch (error) {
        console.error('Error:', error);
        setErrors({ apiError: 'An error occurred during submission.' });
        setIsSubmitting(false); 
      }
    }
  };

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
        <p className='close-login' onClick={()=>setShowSign(false)}>X</p>
        </div>
		{sign==="LOGIN"?<></>
        :<div className='input-container'>
		    <input type="text" required name='username' onChange={handlechange}/>
		    <label>UserName</label>		
        {errors.username && <span>{errors.username}</span>}  
    	</div>
        }
	<div className='input-container'>
		<input type="email" required name='email' onChange={handlechange}/>
		<label>Email</label>		
    {errors.email && <span>{errors.email}</span>}  
	</div>
	<div className='input-container'>		
		<input type="password" required name='password' onChange={handlechange}/>
		<label>Password</label>
    {errors.password && <span>{errors.password}</span>} 
	</div>
  {sign==="LOGIN"?<></>
        :<div className='input-container'>
		    <input type="password" required name='confirmPassword' onChange={handlechange}/>
		    <label>Confirm Password</label>		
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
    	</div>
        }
         {sign==="LOGIN"?<></>
       :
       <>
       <ReCAPTCHA name='captcha'
    sitekey="6LdQuxsqAAAAAKjcPsxeplE_XmYviiiES8sL_vcE"
    onChange={handleCaptchaChange}
  />
   {!isCaptchaVerified && <p className="captcha-error">Please complete the captcha to submit the form.</p>}
   {emailVerification ?<p className='verification-notice'>{emailVerification}</p>:<></>}
   </>
}
   {errors.confirmPassword && <span>{errors.confirmPassword}</span>} 
    {sign==="LOGIN"?
     <p>Create a new account? <span className='switch' onClick={()=>handleSign("SIGN UP")}>Click here</span></p>
     : <p>Already have an account? <span className='switch' onClick={()=>handleSign("LOGIN")}>Login here</span></p>
        
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