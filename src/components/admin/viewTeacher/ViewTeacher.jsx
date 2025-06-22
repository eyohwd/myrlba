import './viewTeacher.css';
import Sidebar from '../../sidebar/Sidebar';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { db, storage } from '../../../firebase/config';
import Notiflix from 'notiflix';
import Loader from '../../loader/Loader';
import useFetchCollection from '../../../customHooks/useFetchCollection';
import { selectTeachers, STORE_TEACHERS } from '../../../redux/slice/teacherSlice';




const ViewTeacher = () => {
  
  
  const {data, isLoading} = useFetchCollection("teachers")
  console.log(data)
  const teachers = useSelector(selectTeachers)
  
 
const dispatch = useDispatch()

useEffect(() => {
  dispatch(
    STORE_TEACHERS({
      teachers: data,
    })
    );
}, [dispatch, data]);






const confirmDelete = (id, imageURL) => {
     
  Notiflix.Confirm.show(
    'Delete Teacher!!!',
    'You are about to delete this Teacher',
    'Delete',
    'Cancel',
    function okCb() {
      deleteTeacher(id, imageURL);
    },
    function cancelCb() {
      console.log('Delete canceled');
    },
    {
      width: '320px',
      borderRadius: '3px',
      titleColor: "orangered",
      okButtonBackground: "orangered",
      cssAnimationStyle: "zoom"
      // etc...
    },
  );

};

const deleteTeacher = async(id, imageURL) => {
  try {
    await deleteDoc(doc(db, "teachers", id));

    const storageRef = ref(storage, imageURL);
    await deleteObject(storageRef)
    toast.success("Teacher deleted successfully")
  } catch(error) {
     toast.error(error.message)
  }
};


  return (
    <>
    {isLoading && <Loader/>}
    <div className='viewTeacher'>
    <Sidebar/>
    <div className="viewTeacherContainer">
    <div className="table">
    <h2>All Teachers</h2>
    <div className="search">
      <p>
        <b>{teachers.length}</b>Teachers found
      </p>
      
    </div>

    {teachers.length === 0 ? (<p>No teacher found</p>) : (
      <table>
        <thead>
        <tr>
          <th>s/n</th>
          <th>Image</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Contact</th>
          <th>Position</th>
          <th>Bank</th>
          <th>Acco/no</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Class</th>
          <th>Actions</th>
         </tr>
         </thead>
         <tbody>
         {teachers.map((teacher, index) => {
          const {id, firstName, lastName, phoneNumber, position, bank, accno, gender, age, imageURL, classz} = teacher;
          return (
            
            <tr key={id}>
               <td>
                {index + 1}
               </td>
               <td>
                <img src={imageURL} alt='' style={{width: "100px"}} />
               </td>
               <td>
                {firstName}
               </td>
               <td>
                {lastName}
               </td>
               <td>
                {phoneNumber}
               </td>
               <td>
                {position}
               </td>
               <td>
                {bank}
               </td>
               <td>
                {accno}
               </td>
               <td>
                {gender}
               </td>
               <td>
                {age}
               </td>
               <td>
                {classz}
               </td>
               <td>
                  <Link to={`/add-teacher/${id}`}>
                    <FaEdit size={20} color="green"/>
                  </Link>
                  &nbsp;
                  <FaTrashAlt size={18} color="red" onClick={() => confirmDelete(id, imageURL)}/>
               </td>
            </tr>
            
          );
         })}
         </tbody>
      </table>
    )}


    </div>
    </div>
  </div>
  </>
  );
}

export default ViewTeacher;
