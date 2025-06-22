import { Link } from 'react-router-dom';
import './sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AdminOnlyLink } from '../adminOnlyRoute/AdminOnlyRoute';

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className="top">
        <AccountCircleIcon className='profileIcon'/>
        <h3>RLBA DATA-BASE</h3>
     </div>
     <hr/>
      <div className="bottom">
        <ul>
            <AdminOnlyLink>
          <Link to='/admin-home'><li>Home</li></Link>
          </AdminOnlyLink>
           <Link to='/add-student/ADD'> <li>Add Student</li></Link>
            <Link to='/all-student'><li>All Students</li></Link>
            <Link to='/add-teacher/ADD'> <li>Add Teacher</li></Link>
            <Link to='/all-teacher'><li>All Staff </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
