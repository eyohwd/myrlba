
import './addNTwoThirdTerm.css';
import { useState } from 'react';
import { db} from '../../../firebase/config';
import { toast } from 'react-toastify';
import pImg from '../../../assets/ava30.jpg';
import { addDoc, collection, Timestamp, doc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { useSelector } from 'react-redux';
import NurseryTwoSidebar from '../../nurseryTwoSidebar/NurseryTwoSidebar';
import { selectNurseryTwoThirdResults } from '../../../redux/slice/nurseryTwoThirdSlice';


  

    const initialState = {
        firstName: "",
        lastName: "",
        numeracy: "",
        literacy: "",
        diction: "",
        scienceExp: "",
        senaoralExp: "",
        ict: "",
        ourWorld: "",
        circleTime: "",
        experimentalArt: "",
        sport: "",
         };

const AddNTwoThirdTerm = () => {
    const {id} = useParams();
    const nTwoResults = useSelector(selectNurseryTwoThirdResults);
    // console.log(nTwoResults)
    const nTwoResultEdit = nTwoResults.find((item) => item.id === id )
   // console.log(nTwoResultEdit)
    const [nTwoResult, setNTwoResult] = useState(
        () => {
            const newState = detectForm(id, 
              { ...initialState},
              nTwoResultEdit
              )
              return newState;
          }
);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    

   const handleInputChange = (e)=>{
    const {name, value} = e.target
    setNTwoResult({...nTwoResult, [name]: value})
   };
   

   function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2
}

   const addnTwoResult = (e)=>{
      e.preventDefault()
      setIsLoading(true)
      console.log(nTwoResult)
      try {

        const docRef =  addDoc(collection(db, "20242025NtwoThirdTerm"), {
            firstName: nTwoResult.firstName,
            lastName: nTwoResult.lastName,
            numeracy: nTwoResult.numeracy,
            literacy: nTwoResult.literacy,
            diction: nTwoResult.diction,
            scienceExp: nTwoResult.scienceExp,
            senaoralExp: nTwoResult.senaoralExp,
            ict: nTwoResult.ict,
            ourWorld: nTwoResult.ourWorld,
            circleTime: nTwoResult.circleTime,
            experimentalArt: nTwoResult.experimentalArt,
            sport: nTwoResult.sport,
            createdAt: Timestamp.now().toDate()
          
        });
  
        setIsLoading(false)
        
        setNTwoResult({...initialState})
        toast.success("Result uploaded successfully");
        navigate('/all-nurserytworesultthirdterm')
  
      } catch(error) {
        setIsLoading(false)
         toast.error(error.message)
      }
   };

   const editNTwoResult = (e) =>{
      e.preventDefault()
      setIsLoading(true)
    
  
        try {
  
           setDoc(doc(db, "20242025NtwoThirdTerm", id), {
            firstName: nTwoResult.firstName,
            lastName: nTwoResult.lastName,
            numeracy: nTwoResult.numeracy,
            literacy: nTwoResult.literacy,
            diction: nTwoResult.diction,
            scienceExp: nTwoResult.scienceExp,
            senaoralExp: nTwoResult.senaoralExp,
            ict: nTwoResult.ict,
            ourWorld: nTwoResult.ourWorld,
            circleTime: nTwoResult.circleTime,
            experimentalArt: nTwoResult.experimentalArt,
            sport: nTwoResult.sport,
            createdAt: nTwoResultEdit.createdAt,
            editedAt: Timestamp.now().toDate(),
  
          });
  
          setIsLoading(false)
          toast.success("Result Edited successfully")
          navigate("/all-nurserytworesultthirdterm")
  
        } catch(error) {
          setIsLoading(false)
          toast.error(error.message)
        }
   };

  return (
    <>
    {isLoading && <Loader/>}
    <div className="addStudent">
        <NurseryTwoSidebar/>
    <div className="addStudentContainer">
        <div className="addStudentWrapper">
    <div className="addtop">
        <h1 className="newStudent">{detectForm(id, "Add Nursery Two Third Term Result", "Edit Result")}</h1>
    </div>
    <div className="addbottom">
        <div className="leftAdd">
            
            <img src={pImg} className="avaimg" alt="no-image"/>
            

            
        </div>
        <div className="rightAdd">

            <form onSubmit={detectForm(id, addnTwoResult, editNTwoResult)} action="" className='formAdd'>
            
            <div className="formInput">
                        <label>First Name</label>
                        <input type='text'  
                        required name='firstName' value={nTwoResult.firstName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

            <div className="formInput">
                        <label>Last Name</label>
                        <input type='text'  
                        required name='lastName' value={nTwoResult.lastName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>Numeracy</label>
                        <input type='text'  
                        required name='numeracy' value={nTwoResult.numeracy} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>literacy</label>
                        <input type='text' 
                         required name='literacy' value={nTwoResult.literacy}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Diction</label>
                        <input type='text' 
                         required name='diction' value={nTwoResult.diction}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>ScienceExp</label>
                        <input type='text'  required 
                        name='scienceExp' value={nTwoResult.scienceExp} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>SenaoralExp</label>
                        <input type='text'  required 
                        name='senaoralExp' value={nTwoResult.senaoralExp} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Ict</label>
                        <input type='text'  required 
                        name='ict' value={nTwoResult.ict} 
                        
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Our World</label>
                        <input type='text'  required 
                        name='ourWorld' value={nTwoResult.ourWorld} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Circle Time</label>  
                        <input type='text'  
                        name='circleTime' value={nTwoResult.circleTime} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Experimental Art</label>
                        <input type='text' required 
                        name='experimentalArt' value={nTwoResult.experimentalArt} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Sport</label>
                        <input type='text'   
                        name='sport' value={nTwoResult.sport} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    

                    
                    
            

                    

                
                 <button className='buttonAdd' type='submit'>
                 {detectForm(id, "Save Result", "Edit Result")}
                 </button>
            </form>
        </div>
    </div>
    </div>
    </div>
</div>
</>
  );
}

export default AddNTwoThirdTerm;
