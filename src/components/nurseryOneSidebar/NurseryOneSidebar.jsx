import { Link } from 'react-router-dom';
import './nurseryOneSidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AdminOnlyLink } from '../adminOnlyRoute/AdminOnlyRoute';

const NurseryOneSidebar = () => {
  return (
    <div className='sidebarNurseryOne'>
     <div className="top">
        <AccountCircleIcon className='profileIcon'/>
        <h3>RLBA 2024/2025</h3>
     </div>
     <hr/>
      <div className="bottom">
        <ul>
            
          <Link to='/admin-homenone'><li>Home</li></Link>
          
           <Link to='/add-nurseryonefirstterm/ADD'> <li>Add 1stTerm</li></Link>
            <Link to='/all-nurseryoneresultfirstterm'><li>View 1stTerm</li></Link>
            <Link to='/add-nurseryonesecondterm/ADD'> <li>Add 2ndTerm</li></Link>
            <Link to='/all-nurseryoneresultsecondterm'><li>View 2ndTerm </li></Link>
            <Link to='/add-nurseryonethirdterm/ADD'> <li>Add 3rdTerm</li></Link>
            <Link to='/all-nurseryoneresultthirdterm'><li>View 3rdTerm </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default NurseryOneSidebar;
