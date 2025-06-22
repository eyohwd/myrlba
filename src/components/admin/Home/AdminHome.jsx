import './adminHome.css';
import Sidebar from '../../sidebar/Sidebar';

const AdminHome = () => {
  return (
    <div className='adminHome'>
      <Sidebar/>
      <div className="adminHomeContainer">
        <h2>Admin Home</h2>
      </div>
    </div>
  );
}

export default AdminHome;
