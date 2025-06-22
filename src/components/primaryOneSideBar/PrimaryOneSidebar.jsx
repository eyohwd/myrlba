import { Link } from 'react-router-dom';
import './primaryOneSidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AdminOnlyLink } from '../adminOnlyRoute/AdminOnlyRoute';

const PrimaryOneSidebar = () => {
  return (
    <div className='sidebarPrimaryOne'>
     <div className="top">
        <AccountCircleIcon className='profileIcon'/>
        <h3>RLBA 2024/2025</h3>
     </div>
     <hr/>
      <div className="bottom">
        <ul>
            
          <Link to='/admin-homepone'><li>Home</li></Link>
          
           <Link to='/add-primaryonefirstterm/ADD'> <li>Add 1stTerm</li></Link>
            <Link to='/all-primaryoneresultfirstterm'><li>View 1stTerm</li></Link>
            <Link to='/add-primaryonesecondterm/ADD'> <li>Add 2ndTerm</li></Link>
            <Link to='/all-primaryoneresultsecondterm'><li>View 2ndTerm </li></Link>
            <Link to='/add-primaryonethirdterm/ADD'> <li>Add 3rdTerm</li></Link>
            <Link to='/all-primaryoneresultthirdterm'><li>View 3rdTerm </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default PrimaryOneSidebar;
