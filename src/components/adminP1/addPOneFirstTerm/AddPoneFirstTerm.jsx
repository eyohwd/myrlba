
import './addPOneFirstTerm.css';
import { useState } from 'react';
import { db} from '../../../firebase/config';
import { toast } from 'react-toastify';
import pImg from '../../../assets/ava30.jpg';
import { addDoc, collection, Timestamp, doc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { useSelector } from 'react-redux';
import PrimaryOneSidebar from '../../primaryOneSideBar/PrimaryOneSidebar';
import { selectPrimaryOneFirstResults } from '../../../redux/slice/primaryOneFirstSlice';


  

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

const AddPOneFirstTerm = () => {
    const {id} = useParams();
    const pOneResults = useSelector(selectPrimaryOneFirstResults);
    // console.log(nTwoResults)
    const pOneResultEdit = pOneResults.find((item) => item.id === id )
    console.log(pOneResultEdit)
    const [pOneResult, setPOneResult] = useState(
        () => {
            const newState = detectForm(id, 
              { ...initialState},
              pOneResultEdit
              )
              return newState;
          }
);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    

   const handleInputChange = (e)=>{
    const {name, value} = e.target
    setPOneResult({...pOneResult, [name]: value})
   };
   

   function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2
}

   const addpOneResult = (e)=>{
      e.preventDefault()
      setIsLoading(true)
      console.log(pOneResult)
      try {

        const docRef =  addDoc(collection(db, "20242025PoneFirstTerm"), {
            firstName: pOneResult.firstName,
            lastName: pOneResult.lastName,
            numeracy: pOneResult.numeracy,
            literacy: pOneResult.literacy,
            diction: pOneResult.diction,
            scienceExp: pOneResult.scienceExp,
            senaoralExp: pOneResult.senaoralExp,
            ict: pOneResult.ict,
            ourWorld: pOneResult.ourWorld,
            circleTime: pOneResult.circleTime,
            experimentalArt: pOneResult.experimentalArt,
            sport: pOneResult.sport,
            createdAt: Timestamp.now().toDate()
          
        });
  
        setIsLoading(false)
        
        setPOneResult({...initialState})
        toast.success("Result uploaded successfully");
        navigate('/all-primaryoneresultfirstterm')
  
      } catch(error) {
        setIsLoading(false)
         toast.error(error.message)
      }
   };

   const editPOneResult = (e) =>{
      e.preventDefault()
      setIsLoading(true)
    
  
        try {
  
           setDoc(doc(db, "20242025PoneFirstTerm", id), {
            firstName: pOneResult.firstName,
            lastName: pOneResult.lastName,
            numeracy: pOneResult.numeracy,
            literacy: pOneResult.literacy,
            diction: pOneResult.diction,
            scienceExp: pOneResult.scienceExp,
            senaoralExp: pOneResult.senaoralExp,
            ict: pOneResult.ict,
            ourWorld: pOneResult.ourWorld,
            circleTime: pOneResult.circleTime,
            experimentalArt: pOneResult.experimentalArt,
            sport: pOneResult.sport,
            createdAt: pOneResultEdit.createdAt,
            editedAt: Timestamp.now().toDate(),
  
          });
  
          setIsLoading(false)
          toast.success("Result Edited successfully")
          navigate("/all-primaryoneresultfirstterm")
  
        } catch(error) {
          setIsLoading(false)
          toast.error(error.message)
        }
   };

  return (
    <>
    {isLoading && <Loader/>}
    <div className="addStudent">
        <PrimaryOneSidebar/>
    <div className="addStudentContainer">
        <div className="addStudentWrapper">
    <div className="addtop">
        <h1 className="newStudent">{detectForm(id, "Add Primary One First Term Result", "Edit Result")}</h1>
    </div>
    <div className="addbottom">
        <div className="leftAdd">
            
            <img src={pImg} className="avaimg" alt="no-image"/>
            

            
        </div>
        <div className="rightAdd">

            <form onSubmit={detectForm(id, addpOneResult, editPOneResult)} action="" className='formAdd'>
            
            <div className="formInput">
                        <label>First Name</label>
                        <input type='text'  
                        required name='firstName' value={pOneResult.firstName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

            <div className="formInput">
                        <label>Last Name</label>
                        <input type='text'  
                        required name='lastName' value={pOneResult.lastName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>Numeracy</label>
                        <input type='text'  
                        required name='numeracy' value={pOneResult.numeracy} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>literacy</label>
                        <input type='text' 
                         required name='literacy' value={pOneResult.literacy}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Diction</label>
                        <input type='text' 
                         required name='diction' value={pOneResult.diction}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>ScienceExp</label>
                        <input type='number'  required 
                        name='scienceExp' value={pOneResult.scienceExp} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>SenaoralExp</label>
                        <input type='text'  required 
                        name='senaoralExp' value={pOneResult.senaoralExp} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Ict</label>
                        <input type='text'  required 
                        name='ict' value={pOneResult.ict} 
                        
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Our World</label>
                        <input type='text'  required 
                        name='ourWorld' value={pOneResult.ourWorld} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Circle Time</label>  
                        <input type='text'  
                        name='circleTime' value={pOneResult.circleTime} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Experimental Art</label>
                        <input type='text' required 
                        name='experimentalArt' value={pOneResult.experimentalArt} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Sport</label>
                        <input type='text'   
                        name='sport' value={pOneResult.sport} 
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

export default AddPOneFirstTerm;
