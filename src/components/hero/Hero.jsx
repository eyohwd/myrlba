import React from 'react';
import './hero.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {

  const [sticky, setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Redeemer's<br/> Light<br/> <span className='academy'>British Academy</span></h1>
        <p>A faith based elementary school in Nigeria
        </p>
        <Link to='/creche'>
        <button className='btn academy1' style={{fontWeight:'bold'}}>Creche </button>
        </Link>
        <Link to='/preschool'>
        <button className='btn academy2' style={{fontWeight:'bold'}}>preschool</button>
        </Link>
        <Link to='/elementary'>
        <button className='btn academy3' style={{fontWeight:'bold'}}>Elementary</button>
        </Link>
        
      </div>
    </div>
  );
}

export default Hero;
