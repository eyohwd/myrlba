import './navbar.css';
import rlbalogo from '../../assets/rlba-logo.png';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import {  Link, useNavigate } from 'react-router-dom';
import { ToggleOffOutlined, ToggleOnOutlined } from '@mui/icons-material';
import { useContext } from "react";
import { DarkModeContext } from "../../context/lightModeContext";
import { AdminOnlyLink, Teacher02OnlyLink, TeacherOnlyLink, TeacherP1OnlyLink, UserOnlyLink } from '../adminOnlyRoute/AdminOnlyRoute';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLinks/HiddenLinks';
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';



const Navbar = () => {
  
  
  const {darkMode}= useContext(DarkModeContext)
  const {dispatch} = useContext(DarkModeContext)
    
   const [mobileMenu, setMobileMenu] = useState(false);
   const [displayName, setdisplayName] = useState("");
   const navigate = useNavigate()
    const dispatchs = useDispatch();
    const toggleMenu = ()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true) 
    }

// logout user
const logoutUser = ()=>{
  signOut(auth).then(() => {
    toast.success("Logout successful...")
    localStorage.removeItem('user')
    navigate("/")
     
  }).catch((error) => {
    toast.error(error.message)
  });

  }
// Monitor signed in user
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const uid = user.uid;
      //  console.log(user.displayName);

       if (user.displayName == null) {
        // const u1 = user.email.slice(0, -10);    (in cases where the user sign in with a gmail account)
        const u1 = user.email.substring(0, user.email.indexOf("@"));
        const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
        console.log(uName);
        setdisplayName(uName)
       } else {
        setdisplayName(user.displayName);
       }

       dispatchs(SET_ACTIVE_USER({
        email: user.email,
        userName: user.displayName ? user.displayName : displayName,
        userId: user.uid,
       }))

} else {
        setdisplayName("");
    dispatchs(REMOVE_ACTIVE_USER());
      }
    });
  },
     [dispatch, displayName])



  return (
    <nav className='container dark-nav'>
        <div className='logoContainer'>
            <img src={rlbalogo} alt="" className='logo'/>
            <span className='logoText'>Redeemer's Light British Academy</span>
        </div>
        <div className="iconBox">
        <div className='mode'>Dark mode {darkMode ? (<ToggleOnOutlined className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>) : (<ToggleOffOutlined className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>)}</div>
        {displayName ? <a href=''><span className='userIcon'><AccountCircleIcon/>Hi, {displayName}</span></a> : ''}
        </div>
     <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
      
      
     <Link to ='/'><li>Home</li></Link>
     <Link to='/about'><li>AboutUs</li></Link>
     <Link to='/program'><li>Programme</li></Link>
     <Link to='/schoolphoto'> <li>Gallery</li></Link>
     <Link to='/blog'> <li>Blog</li></Link>
     <Link to='/admission'><li>Admission</li></Link>
     <Link to='/testimonial'> <li>Testimonial</li></Link>
     <UserOnlyLink>
    <Link to='/student-page'><li>View Profile</li></Link>
    </UserOnlyLink>
    <AdminOnlyLink>
    <Link to='/register'><li>Register</li></Link>
    </AdminOnlyLink>
    <AdminOnlyLink>
    <Link to='/admin-home' className='logButton'><li>Admin</li></Link>
    </AdminOnlyLink>
    <TeacherOnlyLink>
    <Link to='/admin-homenone' className='logButton'><li>NurseryOne</li></Link>
    </TeacherOnlyLink>
    <Teacher02OnlyLink>
    <Link to='/admin-homentwo' className='logButton'><li>NurseryTwo</li></Link>
    </Teacher02OnlyLink>
    <TeacherP1OnlyLink>
    <Link to='/admin-homepone' className='logButton'><li>PrimaryOne</li></Link>
    </TeacherP1OnlyLink>
    <TeacherP1OnlyLink>
    <Link to='/admin-homeptwo' className='logButton'><li>PrimaryTwo</li></Link>
    </TeacherP1OnlyLink>
    <ShowOnLogout>
    <Link to='/login' className='logButton'><li>Login</li></Link>
    </ShowOnLogout>
    
    <ShowOnLogin>
    <Link to='/' onClick={logoutUser} className='logButton'><li>Logout</li></Link>
    </ShowOnLogin>
    <Link to='/contactus'><li className='btn navBtn'>Contact Us</li></Link>
    
    
      </ul>
      
    
      <div className='menu-icon' onClick={toggleMenu}>
        {mobileMenu ? (<CloseIcon/>) : (<MenuIcon />)}
      </div>
      
    </nav>
      

  );
}

export default Navbar;
