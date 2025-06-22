
import './addNurseryOneThirdTerm.css';
import { useState } from 'react';
import { db} from '../../../firebase/config';
import { toast } from 'react-toastify';
import pImg from '../../../assets/ava30.jpg';
import { addDoc, collection, Timestamp, doc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { useSelector } from 'react-redux';
import NurseryOneSidebar from '../../nurseryOneSidebar/NurseryOneSidebar';
import { selectNurseryOneThirdResults } from '../../../redux/slice/nurseryOneThirdSlice';



  

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

const AddNurseryOneThirdTerm = () => {
    const {id} = useParams();
    const nOneResults = useSelector(selectNurseryOneThirdResults);
    console.log(nOneResults)
    const nOneResultEdit = nOneResults.find((item) => item.id === id )
    console.log(nOneResultEdit)
    const [nOneResult, setNOneResult] = useState(
        () => {
            const newState = detectForm(id, 
              { ...initialState},
              nOneResultEdit
              )
              return newState;
          }
);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    

   const handleInputChange = (e)=>{
    const {name, value} = e.target
    setNOneResult({...nOneResult, [name]: value})
   };
   

   function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2
}

   const addnOneResult = (e)=>{
      e.preventDefault()
      setIsLoading(true)
      console.log(nOneResult)
      try {

        const docRef =  addDoc(collection(db, "20242025NoneThirdTerm"), {
            firstName: nOneResult.firstName,
            lastName: nOneResult.lastName,
            numeracy: nOneResult.numeracy,
            literacy: nOneResult.literacy,
            diction: nOneResult.diction,
            scienceExp: nOneResult.scienceExp,
            senaoralExp: nOneResult.senaoralExp,
            ict: nOneResult.ict,
            ourWorld: nOneResult.ourWorld,
            circleTime: nOneResult.circleTime,
            experimentalArt: nOneResult.experimentalArt,
            sport: nOneResult.sport,
            
          createdAt: Timestamp.now().toDate()
          
        });
  
        setIsLoading(false)
        
        setNOneResult({...initialState})
        toast.success("Result uploaded successfully");
        navigate('/all-nurseryoneresultthirdterm')
  
      } catch(error) {
        setIsLoading(false)
         toast.error(error.message)
      }
   };

   const editNOneResult = (e) =>{
      e.preventDefault()
      setIsLoading(true)
    
  
        try {
  
           setDoc(doc(db, "20242025NoneThirdTerm", id), {
            firstName: nOneResult.firstName,
            lastName: nOneResult.lastName,
            numeracy: nOneResult.numeracy,
            literacy: nOneResult.literacy,
            diction: nOneResult.diction,
            scienceExp: nOneResult.scienceExp,
            senaoralExp: nOneResult.senaoralExp,
            ict: nOneResult.ict,
            ourWorld: nOneResult.ourWorld,
            circleTime: nOneResult.circleTime,
            experimentalArt: nOneResult.experimentalArt,
            sport: nOneResult.sport,
            createdAt: nOneResultEdit.createdAt,
            editedAt: Timestamp.now().toDate(),
  
          });
  
          setIsLoading(false)
          toast.success("Result Edited successfully")
          navigate("/all-nurseryoneresultthirdterm")
  
        } catch(error) {
          setIsLoading(false)
          toast.error(error.message)
        }
   };

  return (
    <>
    {isLoading && <Loader/>}
    <div className="addStudent">
        <NurseryOneSidebar/>
    <div className="addStudentContainer">
        <div className="addStudentWrapper">
    <div className="addtop">
        <h1 className="newStudent">{detectForm(id, "Add Third Term Result", "Edit Result")}</h1>
    </div>
    <div className="addbottom">
        <div className="leftAdd">
            
            <img src={pImg} className="avaimg" alt="no-image"/>
            

            
        </div>
        <div className="rightAdd">

            <form onSubmit={detectForm(id, addnOneResult, editNOneResult)} action="" className='formAdd'>
            
            <div className="formInput">
                        <label>First Name</label>
                        <input type='text'  
                        required name='firstName' value={nOneResult.firstName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

            <div className="formInput">
                        <label>Last Name</label>
                        <input type='text'  
                        required name='lastName' value={nOneResult.lastName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>Numeracy</label>
                        <input type='text'  
                        required name='numeracy' value={nOneResult.numeracy} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>literacy</label>
                        <input type='text' 
                         required name='literacy' value={nOneResult.literacy}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Diction</label>
                        <input type='text' 
                         required name='diction' value={nOneResult.diction}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>ScienceExp</label>
                        <input type='text'  required 
                        name='scienceExp' value={nOneResult.scienceExp} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>SenaoralExp</label>
                        <input type='text'  required 
                        name='senaoralExp' value={nOneResult.senaoralExp} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Ict</label>
                        <input type='text'  required 
                        name='ict' value={nOneResult.ict} 
                        
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Our World</label>
                        <input type='text'  required 
                        name='ourWorld' value={nOneResult.ourWorld} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Circle Time</label>  
                        <input type='text'  
                        name='circleTime' value={nOneResult.circleTime} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Experimental Art</label>
                        <input type='text' required 
                        name='experimentalArt' value={nOneResult.experimentalArt} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Sport</label>
                        <input type='text'   
                        name='sport' value={nOneResult.sport} 
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

export default AddNurseryOneThirdTerm;
