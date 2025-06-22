import './viewNTwoSecondTerm.css';
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
import NurseryTwoSidebar from '../../nurseryTwoSidebar/NurseryTwoSidebar';
import { selectNurseryTwoSecondResults, STORE_NURSERYTWOSECONDRESULT } from '../../../redux/slice/nurseryTwoSecondSlice';




const ViewNTwoSecondTerm = () => {
  
  
  const {data, isLoading} = useFetchCollection("20242025NtwoSecondTerm")
  console.log(data);
  const nTwoResults = useSelector(selectNurseryTwoSecondResults)
  console.log(nTwoResults)
 
const dispatch = useDispatch()

useEffect(() => {
  dispatch(
    STORE_NURSERYTWOSECONDRESULT({
      nTwoResults: data,
    })
    );
}, [dispatch, data]);






const confirmDelete = (id) => {
     
  Notiflix.Confirm.show(
    'Delete Result!!!',
    'You are about to delete this result',
    'Delete',
    'Cancel',
    function okCb() {
      deleteNurseryTwoSecondTermResult(id);
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

const deleteNurseryTwoSecondTermResult = async(id) => {
  try {
    await deleteDoc(doc(db, "20242025NtwoSecondTerm", id));

    
    toast.success("Result deleted successfully")
  } catch(error) {
     toast.error(error.message)
  }
};


  return (
    <>
    {isLoading && <Loader/>}
    <div className='viewStudent'>
    <NurseryTwoSidebar/>
    <div className="viewStudentContainer">
    <div className="table">
    <h2>All Nursery Two Second Term Result</h2>
    <div className="search">
      <p>
        <b>{nTwoResults.length}</b>Result found
      </p>
      
    </div>

    {nTwoResults.length === 0 ? (<p>No result found</p>) : (
      <table>
        <thead>
        <tr>
          <th>s/n</th>
          <th>Name</th>
          <th>Numeracy</th>
          <th>Literacy</th>
          <th>Diction</th>
          <th>Science Exp</th>
          <th>Senaoral Exp</th>
          <th>ICT</th>
          <th>Our World</th>
          <th>Circle Time</th>
          <th>Experimental Art</th>
          
          <th>Actions</th>
         </tr>
         </thead>
         <tbody>
         {nTwoResults.map((nTwoResult, index) => {
          const {id, firstName, lastName, numeracy, literacy, diction, scienceExp, senaoralExp, ict, ourWorld, circleTime, experimentalArt} = nTwoResult;
          return (
            
            <tr key={id}>
               <td>
                {index + 1}
               </td>
               <td>
                {`${firstName} ${lastName}`}
               </td>
               <td>
                {numeracy}
               </td>
               <td>
                {literacy}
               </td>
               <td>
                {diction}
               </td>
               <td>
                {scienceExp}
               </td>
               <td>
                {senaoralExp}
               </td>
               <td>
                {ict}
               </td>
               <td>
                {ourWorld}
               </td>
               <td>
                {circleTime}
               </td>
               <td>
                {experimentalArt}
               </td>
               <td>
                  <Link to={`/add-nurserytwosecondterm/${id}`}>
                    <FaEdit size={20} color="green"/>
                  </Link>
                  &nbsp;
                  <FaTrashAlt size={18} color="red" onClick={() => confirmDelete(id)}/>
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

export default ViewNTwoSecondTerm;
