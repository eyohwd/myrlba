import './addPTwoSecondTerm.css';
import { useState } from 'react';
import { db} from '../../../firebase/config';
import { toast } from 'react-toastify';
import pImg from '../../../assets/ava30.jpg';
import { addDoc, collection, Timestamp, doc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { useSelector } from 'react-redux';
import PrimaryTwoSidebar from '../../primaryTwoSideBar/PrimaryTwoSidebar';
import { selectPrimaryTwoSecondResults } from '../../../redux/slice/primaryTwoSecondSlice';

  

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

const AddPTwoSecondTerm = () => {
    const {id} = useParams();
    const pTwoResults = useSelector(selectPrimaryTwoSecondResults);
    // console.log(nTwoResults)
    const pTwoResultEdit = pTwoResults.find((item) => item.id === id )
    console.log(pTwoResultEdit)
    const [pTwoResult, setPTwoResult] = useState(
        () => {
            const newState = detectForm(id, 
              { ...initialState},
              pTwoResultEdit
              )
              return newState;
          }
);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    

   const handleInputChange = (e)=>{
    const {name, value} = e.target
    setPTwoResult({...pTwoResult, [name]: value})
   };
   

   function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2
}

   const addpTwoResult = (e)=>{
      e.preventDefault()
      setIsLoading(true)
      console.log(pTwoResult)
      try {

        const docRef =  addDoc(collection(db, "20242025PtwoSecondTerm"), {
            firstName: pTwoResult.firstName,
            lastName: pTwoResult.lastName,
            numeracy: pTwoResult.numeracy,
            literacy: pTwoResult.literacy,
            diction: pTwoResult.diction,
            scienceExp: pTwoResult.scienceExp,
            senaoralExp: pTwoResult.senaoralExp,
            ict: pTwoResult.ict,
            ourWorld: pTwoResult.ourWorld,
            circleTime: pTwoResult.circleTime,
            experimentalArt: pTwoResult.experimentalArt,
            sport: pTwoResult.sport,
            createdAt: Timestamp.now().toDate()
          
        });
  
        setIsLoading(false)
        
        setPTwoResult({...initialState})
        toast.success("Result uploaded successfully");
        navigate('/all-primarytworesultsecondterm')
  
      } catch(error) {
        setIsLoading(false)
         toast.error(error.message)
      }
   };

   const editPTwoResult = (e) =>{
      e.preventDefault()
      setIsLoading(true)
    
  
        try {
  
           setDoc(doc(db, "20242025PtwoSecondTerm", id), {
            firstName: pTwoResult.firstName,
            lastName: pTwoResult.lastName,
            numeracy: pTwoResult.numeracy,
            literacy: pTwoResult.literacy,
            diction: pTwoResult.diction,
            scienceExp: pTwoResult.scienceExp,
            senaoralExp: pTwoResult.senaoralExp,
            ict: pTwoResult.ict,
            ourWorld: pTwoResult.ourWorld,
            circleTime: pTwoResult.circleTime,
            experimentalArt: pTwoResult.experimentalArt,
            sport: pTwoResult.sport,
            createdAt: pTwoResultEdit.createdAt,
            editedAt: Timestamp.now().toDate(),
  
          });
  
          setIsLoading(false)
          toast.success("Result Edited successfully")
          navigate("/all-primarytworesultsecondterm")
  
        } catch(error) {
          setIsLoading(false)
          toast.error(error.message)
        }
   };

  return (
    <>
    {isLoading && <Loader/>}
    <div className="addStudent">
        <PrimaryTwoSidebar/>
    <div className="addStudentContainer">
        <div className="addStudentWrapper">
    <div className="addtop">
        <h1 className="newStudent">{detectForm(id, "Add Primary Two Second Term Result", "Edit Result")}</h1>
    </div>
    <div className="addbottom">
        <div className="leftAdd">
            
            <img src={pImg} className="avaimg" alt="no-image"/>
            

            
        </div>
        <div className="rightAdd">

            <form onSubmit={detectForm(id, addpTwoResult, editPTwoResult)} action="" className='formAdd'>
            
            <div className="formInput">
                        <label>First Name</label>
                        <input type='text'  
                        required name='firstName' value={pTwoResult.firstName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

            <div className="formInput">
                        <label>Last Name</label>
                        <input type='text'  
                        required name='lastName' value={pTwoResult.lastName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>Numeracy</label>
                        <input type='text'  
                        required name='numeracy' value={pTwoResult.numeracy} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>literacy</label>
                        <input type='text' 
                         required name='literacy' value={pTwoResult.literacy}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Diction</label>
                        <input type='text' 
                         required name='diction' value={pTwoResult.diction}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>ScienceExp</label>
                        <input type='number'  required 
                        name='scienceExp' value={pTwoResult.scienceExp} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>SenaoralExp</label>
                        <input type='text'  required 
                        name='senaoralExp' value={pTwoResult.senaoralExp} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Ict</label>
                        <input type='text'  required 
                        name='ict' value={pTwoResult.ict} 
                        
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Our World</label>
                        <input type='text'  required 
                        name='ourWorld' value={pTwoResult.ourWorld} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Circle Time</label>  
                        <input type='text'  
                        name='circleTime' value={pTwoResult.circleTime} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Experimental Art</label>
                        <input type='text' required 
                        name='experimentalArt' value={pTwoResult.experimentalArt} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Sport</label>
                        <input type='text'   
                        name='sport' value={pTwoResult.sport} 
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

export default AddPTwoSecondTerm;
