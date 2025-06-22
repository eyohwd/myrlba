import './register.css';
import registerImg from '../../assets/register.png'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';



const Register = () => {

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [cPassword, setCPassword]=useState("");
    const [isLoading, setIsLoading ] =useState(false)
    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault();
    
        if (password !== cPassword) {
            toast.error("Password do not match")
      
           }
        
      
           createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          setIsLoading(false)
          toast.success("Registration successful..")
          e.target.reset();
      
        
        })
        .catch((error) => {
          toast.error(error.message);
    
        });
    }

  return (

    
    <div className='register'>
     <div className='registerWrapper'>
        <div className='registerImgContainer'>
            <img src={registerImg} alt="register-image" className='registerImg'/>
        </div>
        <div className='registerFormContainer'>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
                <input type="text" placeholder='email' required value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='password' required value={password} 
                onChange={(e)=>setPassword(e.target.value)} />
                <input type="password" placeholder='confirm password' required value={cPassword} 
                onChange={(e)=>setCPassword(e.target.value)} />
                <button type='submit' className='btn' style={{background:"orangered",
                     width:"100px", color:"white", fontSize:"15px"}}>Send</button>
            </form>
        </div>
    </div> 
    </div>

  );
}

export default Register;
