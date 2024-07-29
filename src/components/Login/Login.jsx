import React from 'react'
import './Login.css'
const Login = ({setShowSign,sign,handleSign}) => {
  
  return (
    <div className='log-in'>
       <form className="login-container">
        <div className="login-title">
        <span className='text-center'>{sign}</span>
        <p className='close-login' onClick={()=>setShowSign(false)}>X</p>
        </div>
		{sign==="LOGIN"?<></>
        :<div className='input-container'>
		    <input type="text" required/>
		    <label>UserName</label>		
    	</div>
        }
	<div className='input-container'>
		<input type="email" required/>
		<label>Email</label>		
	</div>
	<div className='input-container'>		
		<input type="password" required/>
		<label>Password</label>
	</div>
  {sign==="LOGIN"?<></>
        :<div className='input-container'>
		    <input type="text" required/>
		    <label>Confirm Password</label>		
    	</div>
        }
    {sign==="LOGIN"?
     <p>Create a new account? <span className='switch' onClick={()=>handleSign("SIGN UP")}>Click here</span></p>
     : <p>Already have an account? <span className='switch' onClick={()=>handleSign("LOGIN")}>Login here</span></p>
        
    }
  
		<button type="submit" className='login-btn'>submit</button>

       </form>
    </div>
  )
}

export default Login