import './viewPTwoSecondTerm.css';
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
import PrimaryTwoSidebar from '../../primaryTwoSideBar/PrimaryTwoSidebar';
import { selectPrimaryTwoSecondResults, STORE_PRIMARYTWOSECONDRESULT } from '../../../redux/slice/primaryTwoSecondSlice';




const ViewPTwoSecondTerm = () => {
  
  
  const {data, isLoading} = useFetchCollection("20242025PtwoSecondTerm")
  console.log(data);
  const pTwoResults = useSelector(selectPrimaryTwoSecondResults)
  console.log(pTwoResults)
 
const dispatch = useDispatch()

useEffect(() => {
  dispatch(
    STORE_PRIMARYTWOSECONDRESULT({
      pTwoResults: data,
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
      deletePrimaryTwoSecondTermResult(id);
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

const deletePrimaryTwoSecondTermResult = async(id) => {
  try {
    await deleteDoc(doc(db, "20242025PtwoSecondTerm", id));

    
    toast.success("Result deleted successfully")
  } catch(error) {
     toast.error(error.message)
  }
};


  return (
    <>
    {isLoading && <Loader/>}
    <div className='viewStudent'>
    <PrimaryTwoSidebar/>
    <div className="viewStudentContainer">
    <div className="table">
    <h2>All Primary Two Second Term Result</h2>
    <div className="search">
      <p>
        <b>{pTwoResults.length}</b>Result found
      </p>
      
    </div>

    {pTwoResults.length === 0 ? (<p>No result found</p>) : (
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
         {pTwoResults.map((pTwoResult, index) => {
          const {id, firstName, lastName, numeracy, literacy, diction, scienceExp, senaoralExp, ict, ourWorld, circleTime, experimentalArt} = pTwoResult;
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
                  <Link to={`/add-primarytwosecondterm/${id}`}>
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

export default ViewPTwoSecondTerm;
