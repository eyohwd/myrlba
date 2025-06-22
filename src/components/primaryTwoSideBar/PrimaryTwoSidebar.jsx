import { Link } from 'react-router-dom';
import './primaryTwoSidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AdminOnlyLink } from '../adminOnlyRoute/AdminOnlyRoute';

const PrimaryTwoSidebar = () => {
  return (
    <div className='sidebarPrimaryTwo'>
     <div className="top">
        <AccountCircleIcon className='profileIcon'/>
        <h3>RLBA 2024/2025</h3>
     </div>
     <hr/>
      <div className="bottom">
        <ul>
            
          <Link to='/admin-homeptwo'><li>Home</li></Link>
          
           <Link to='/add-primarytwofirstterm/ADD'> <li>Add 1stTerm</li></Link>
            <Link to='/all-primarytworesultfirstterm'><li>View 1stTerm</li></Link>
            <Link to='/add-primarytwosecondterm/ADD'> <li>Add 2ndTerm</li></Link>
            <Link to='/all-primarytworesultsecondterm'><li>View 2ndTerm </li></Link>
            <Link to='/add-primarytwothirdterm/ADD'> <li>Add 3rdTerm</li></Link>
            <Link to='/all-primarytworesultthirdterm'><li>View 3rdTerm </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default PrimaryTwoSidebar;
