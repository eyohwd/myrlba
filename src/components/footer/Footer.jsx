import './footer.css'
import rlbalogo from '../../assets/rlba-logo.png';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerLeft'>
         <div>
          <img src={rlbalogo} alt="" className='footerLogo' />
         </div>
         <div className='footerDesc'>
          Redeemer's Light British Academy
         </div>
         <div className='socialIconContainer'>
          <div className='socialIcon facebookIcon'>
            <a href="https://www.facebook.com/redeemerslightbritishacademy" target='_blank'>
            <Facebook/>
            </a>
          </div>
          <div className='socialIcon instagramIcon'>
            <a href="https://www.instagram.com/redeemerslightbritishacademy" target='_blank'>
            <Instagram />
            </a>
          </div>
          <div className='socialIcon youtubeIcon'>
            <a href="https://www.youtube.com/@redeemerslightbritishacademyrl" target='_blank'>
            <YouTube/>
            </a>
          </div>
          
         </div>
      </div>
      
      <div className='footerRight'>
        
            <ul>
              <Link to='/'>
              <li>Home</li>
              </Link>
              <Link to='/about'>
              <li>AboutUs</li>
              </Link>
              <Link to='/program'>
              <li>Programme</li>
              </Link>
              <Link to='/admission'>
              <li>Admission</li>
              </Link>
            </ul>
          
      </div>

      <div className='footerCenter'>
      <p className='copyRight'>&copy;{new Date().getFullYear()} Redeemer's Light British Academy.<br/> All right reserved.<br/> Website Designed by Eyohtech</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy policy</li>
      </ul>
      </div>
      
      
      
    </div>
  );
}

export default Footer;
