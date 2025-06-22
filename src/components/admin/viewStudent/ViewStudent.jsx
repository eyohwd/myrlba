import './viewStudent.css';
import Sidebar from '../../sidebar/Sidebar';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectStudents, STORE_STUDENTS } from '../../../redux/slice/studentSlice';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { db, storage } from '../../../firebase/config';
import Notiflix from 'notiflix';
import Loader from '../../loader/Loader';
import useFetchCollection from '../../../customHooks/useFetchCollection';




const ViewStudent = () => {
  
  
  const {data, isLoading} = useFetchCollection("students")
  console.log(data)
  const students = useSelector(selectStudents)
  
 
const dispatch = useDispatch()

useEffect(() => {
  dispatch(
    STORE_STUDENTS({
      students: data,
    })
    );
}, [dispatch, data]);






const confirmDelete = (id, imageURL) => {
     
  Notiflix.Confirm.show(
    'Delete Student!!!',
    'You are about to delete this student',
    'Delete',
    'Cancel',
    function okCb() {
      deleteStudent(id, imageURL);
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

const deleteStudent = async(id, imageURL) => {
  try {
    await deleteDoc(doc(db, "students", id));

    const storageRef = ref(storage, imageURL);
    await deleteObject(storageRef)
    toast.success("Student deleted successfully")
  } catch(error) {
     toast.error(error.message)
  }
};


  return (
    <>
    {isLoading && <Loader/>}
    <div className='viewStudent'>
    <Sidebar/>
    <div className="viewStudentContainer">
    <div className="table">
    <h2>All Student</h2>
    <div className="search">
      <p>
        <b>{students.length}</b>Students found
      </p>
      
    </div>

    {students.length === 0 ? (<p>No student found</p>) : (
      <table>
        <thead>
        <tr>
          <th>s/n</th>
          <th>Image</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Program</th>
          <th>Class</th>
          <th>Actions</th>
         </tr>
         </thead>
         <tbody>
         {students.map((student, index) => {
          const {id, firstName, lastName, gender, age, imageURL, program, classz} = student;
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
                {gender}
               </td>
               <td>
                {age}
               </td>
               <td>
                {program}
               </td>
               <td>
                {classz}
               </td>
               <td>
                  <Link to={`/add-student/${id}`}>
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

export default ViewStudent;
