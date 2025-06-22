import { DriveFolderUploadOutlined } from '@mui/icons-material';
import './addTeacher.css';
import pImg from '../../../assets/ava30.jpg';
import Sidebar from '../../sidebar/Sidebar';
import { useState } from 'react';
import {deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../../firebase/config';
import { toast } from 'react-toastify';
import { addDoc, collection, Timestamp, doc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { useSelector } from 'react-redux';
import { selectTeachers } from '../../../redux/slice/teacherSlice';



    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        gender: "",
        imageURL: "",
        position: "",
        address: "",
        phoneNumber: "",
        bank:"",
        accno:"",
        progress: "",
        percent: 0,
        classz: "",
    };

const AddTeacher = () => {
    const {id} = useParams();
    const teachers = useSelector(selectTeachers);
    console.log(teachers)
    const teacherEdit = teachers.find((item) => item.id === id )
    console.log(teacherEdit)
    const [teacher, setTeacher] = useState(
        () => {
            const newState = detectForm(id, 
              { ...initialState},
              teacherEdit
              )
              return newState;
          }
);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [uploadProgress, setUploadProgress] = useState(0)

   const handleInputChange = (e)=>{
    const {name, value} = e.target
    setTeacher({...teacher, [name]: value})
   };
   const handleImageChange = (e)=>{
    const file = e.target.files[0];
    console.log(file);
    const storageRef = ref(storage, `lekhoshop/${Date.now()}${file.name}`);
   const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
  (snapshot) => {
    
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setUploadProgress(progress);
    
  }, 
  (error) => {
    toast.error(error.message)
    
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setTeacher({...teacher, imageURL: downloadURL})
      toast.success("Image uploaded successfully.")
    });
  }
);
   };

   function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2
}

   const addTeacher = (e)=>{
      e.preventDefault()
      setIsLoading(true)
      console.log(teacher)
      try {

        const docRef =  addDoc(collection(db, "teachers"), {
          firstName: teacher.firstName,
          lastName: teacher.lastName,
          email: teacher.email,
          age: Number(teacher.age),
          gender: teacher.gender,
          imageURL: teacher.imageURL,
          position: teacher.position,
          bank: teacher.bank,
          accno: teacher.accno,
          classz: teacher.classz,
          address: teacher.address,
          phoneNumber: teacher.phoneNumber,
          progress: teacher.progress,
          percent: Number(teacher.percent),
          createdAt: Timestamp.now().toDate()
          
        });
  
        setIsLoading(false)
        setUploadProgress(0)
        setTeacher({...initialState})
        toast.success("Teacher uploaded successfully");
        navigate('/all-teacher')
  
      } catch(error) {
        setIsLoading(false)
         toast.error(error.message)
      }
   };

   const editTeacher = (e) =>{
      e.preventDefault()
      setIsLoading(true)
      if (teacher.imageURL !== teacherEdit.imageURL) {
        const storageRef = ref(storage, teacherEdit.imageURL);
         deleteObject(storageRef);
       }
  
        try {
  
           setDoc(doc(db, "teachers", id), {
               
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            email: teacher.email,
            age: Number(teacher.age),
            gender: teacher.gender,
            imageURL: teacher.imageURL,
            position: teacher.position,
            bank: teacher.bank,
            accno: teacher.accno,
            classz: teacher.classz,
            address: teacher.address,
            phoneNumber: teacher.phoneNumber,
            progress: teacher.progress,
            percent: Number(teacher.percent),
            createdAt: teacherEdit.createdAt,
            editedAt: Timestamp.now().toDate(),
  
          });
  
          setIsLoading(false)
          toast.success("Teacher Edited successfully")
          navigate("/all-teacher")
  
        } catch(error) {
          setIsLoading(false)
          toast.error(error.message)
        }
   };

  return (
    <>
    {isLoading && <Loader/>}
    <div className="addTeacher">
        <Sidebar/>
    <div className="addTeacherContainer">
        <div className="addTeacherWrapper">
    <div className="addtop">
        <h1 className="newTeacher">{detectForm(id, "Add New Teacher", "Edit Teacher")}</h1>
    </div>
    <div className="addbottom">
        <div className="leftAdd">
            
            <img src={pImg} className="avaimg" alt="no-image"/>
            {uploadProgress === 0 ? null : (
               <div className="progress">
               <div className="progressBar" style={{width:`${uploadProgress}%`}}>
                {uploadProgress < 100 ? `Uploading ${uploadProgress}` : `Upload Complete ${uploadProgress}%`}
               </div>
           </div>
            )}

            
        </div>
        <div className="rightAdd">

            <form onSubmit={detectForm(id, addTeacher, editTeacher)} action="" className='formAdd'>
            <div className="formInput">
                    <label htmlFor="file">
                       Image: <DriveFolderUploadOutlined className="iconAdd"/>
                    </label>
                    <input type="file" id="file"   
                    style={{display:"none"}} 
                    onChange={(e)=>handleImageChange(e)}/>
                </div>

                
                    <div className="formInput">
                        <label>First Name</label>
                        <input type='text'  
                        required name='firstName' value={teacher.firstName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>last Name</label>
                        <input type='text' 
                         required name='lastName' value={teacher.lastName}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Position</label>
                        <input type='text' 
                         required name='position' value={teacher.position}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Bank</label>
                        <input type='text' 
                         required name='bank' value={teacher.bank}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Account Number</label>
                        <input type='text' 
                         required name='accno' value={teacher.accno}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Email</label>
                        <input type='text' 
                          name='email' value={teacher.email}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Age</label>
                        <input type='number'   
                        name='age' value={teacher.age} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Gender</label>
                        <input type='text'  required 
                        name='gender' value={teacher.gender} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    

                    <div className="formInput">
                        <label>Teacher Contact</label>
                        <input type='text'  required 
                        name='phoneNumber' value={teacher.phoneNumber} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Address</label>
                        <input type='text'  
                        name='address' value={teacher.address} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Class</label>
                        <input type='text'  
                        name='classz' value={teacher.classz} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Performance</label>
                        <input type='text'   
                        name='progress' value={teacher.progress} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    

                    <div className="formInput">
                        <label>Percent</label>
                        <input type='number'  
                        name='percent' value={teacher.percent}
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                    
            {teacher.imageURL === "" ? null : (
              <input style={{padding:"8px"}} type="text" name='imageURL' value={teacher.imageURL} 
              disabled onChange={(e)=>handleInputChange(e)} />
            )}

                   

                
                 <button className='buttonAdd' type='submit'>
                 {detectForm(id, "Save Teacher", "Edit Teacher")}
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

export default AddTeacher;
