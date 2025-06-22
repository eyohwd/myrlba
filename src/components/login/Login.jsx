import './login.css';
import loginImg from '../../assets/login.png'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useState } from 'react';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate = useNavigate()

    const loginUser = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
       const user = userCredential.user;
       if(user){
        localStorage.setItem("user", JSON.stringify(user))
    }
    
       toast.success("Login successful...")
        navigate('/student-page')
        
  })
  .catch((error) => {
    
    toast.error(error.message)

  });
    }

  return (
    <div className='login'>
         <div className='loginWrapper'>
            <div className='loginImgContainer'>
                <img src={loginImg} alt="login-image" className='loginImg'/>
            </div>
            <div className='loginFormContainer'>
                <h2>Login</h2>
                <form onSubmit={loginUser}>
                    <input type="text" placeholder='email' required value={email} 
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='password' required value={password} 
                    onChange={(e)=>setPassword(e.target.value)} />
                    
                    <button type='submit' className='btn' style={{background:"orangered",
                         width:"100px", color:"white", fontSize:"15px"}}>Send</button>
                </form>
            </div>
        </div> 
        </div>
  );
}

export default Login;
