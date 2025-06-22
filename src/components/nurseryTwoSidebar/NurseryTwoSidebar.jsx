import { Link } from 'react-router-dom';
import './nurseryTwoSidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AdminOnlyLink } from '../adminOnlyRoute/AdminOnlyRoute';

const NurseryTwoSidebar = () => {
  return (
    <div className='sidebarNurseryTwo'>
     <div className="top">
        <AccountCircleIcon className='profileIcon'/>
        <h3>RLBA 2024/2025</h3>
     </div>
     <hr/>
      <div className="bottom">
        <ul>
            
          <Link to='/admin-homentwo'><li>Home</li></Link>
          
           <Link to='/add-nurserytwofirstterm/ADD'> <li>Add 1stTerm</li></Link>
            <Link to='/all-nurserytworesultfirstterm'><li>View 1stTerm</li></Link>
            <Link to='/add-nurserytwosecondterm/ADD'> <li>Add 2ndTerm</li></Link>
            <Link to='/all-nurserytworesultsecondterm'><li>View 2ndTerm </li></Link>
            <Link to='/add-nurserytwothirdterm/ADD'> <li>Add 3rdTerm</li></Link>
            <Link to='/all-nurserytworesultthirdterm'><li>View 3rdTerm </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default NurseryTwoSidebar;
