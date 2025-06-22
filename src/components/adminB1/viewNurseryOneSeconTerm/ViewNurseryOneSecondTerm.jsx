import './viewNurseryOneSecondTerm.css';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteDoc, doc } from 'firebase/firestore';
import { db} from '../../../firebase/config';
import Notiflix from 'notiflix';
import Loader from '../../loader/Loader';
import NurseryOneSidebar from '../../nurseryOneSidebar/NurseryOneSidebar';
import useFetchCollection from '../../../customHooks/useFetchCollection';
import { selectNurseryOneSecondResults, STORE_NURSERYONESECONDRESULT } from '../../../redux/slice/nurseryOneSecondSlice';



const ViewNurseryOneSecondTerm = () => {
  
  
  const {data, isLoading} = useFetchCollection("20242025NoneSecondTerm")
  console.log(data);
  const nOneResults = useSelector(selectNurseryOneSecondResults)
  console.log(nOneResults)
 
const dispatch = useDispatch()

useEffect(() => {
  dispatch(
    STORE_NURSERYONESECONDRESULT({
      nOneResults: data,
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
      deleteNurseryOneSecondTermResult(id);
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

const deleteNurseryOneSecondTermResult = async(id) => {
  try {
    await deleteDoc(doc(db, "20242025NoneSecondTerm", id));

    
    toast.success("Result deleted successfully")
  } catch(error) {
     toast.error(error.message)
  }
};


  return (
    <>
    {isLoading && <Loader/>}
    <div className='viewStudent'>
    <NurseryOneSidebar/>
    <div className="viewStudentContainer">
    <div className="table">
    <h2>All Nursery One Second Term Result</h2>
    <div className="search">
      <p>
        <b>{nOneResults.length}</b>Result found
      </p>
      
    </div>

    {nOneResults.length === 0 ? (<p>No result found</p>) : (
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
         {nOneResults.map((nOneResult, index) => {
          const {id, firstName, lastName, numeracy, literacy, diction, scienceExp, senaoralExp, ict, ourWorld, circleTime, experimentalArt} = nOneResult;
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
                  <Link to={`/add-nurseryonesecondterm/${id}`}>
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

export default ViewNurseryOneSecondTerm;
