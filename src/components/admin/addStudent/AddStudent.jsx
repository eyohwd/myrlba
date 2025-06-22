import { DriveFolderUploadOutlined } from '@mui/icons-material';
import './addStudent.css';
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
import { selectStudents } from '../../../redux/slice/studentSlice';

  const classez = [
    {id: 1, name: "Creche"},
    {id: 2, name: "Preschool"},
    {id: 3, name: "Elementary"},
    ];

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        age: 0,
        gender: "",
        imageURL: "",
        parentName: "",
        address: "",
        phoneNumber: "",
        progress: "",
        percent: 0,
        program: "",
        classz: "",
    };

const AddStudent = () => {
    const {id} = useParams();
    const students = useSelector(selectStudents);
    console.log(students)
    const studentEdit = students.find((item) => item.id === id )
    console.log(studentEdit)
    const [student, setStudent] = useState(
        () => {
            const newState = detectForm(id, 
              { ...initialState},
              studentEdit
              )
              return newState;
          }
);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [uploadProgress, setUploadProgress] = useState(0)

   const handleInputChange = (e)=>{
    const {name, value} = e.target
    setStudent({...student, [name]: value})
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
      setStudent({...student, imageURL: downloadURL})
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

   const addStudent = (e)=>{
      e.preventDefault()
      setIsLoading(true)
      console.log(student)
      try {

        const docRef =  addDoc(collection(db, "students"), {
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          age: Number(student.age),
          gender: student.gender,
          imageURL: student.imageURL,
          program: student.program,
          classz: student.classz,
          address: student.address,
          parentName: student.parentName,
          phoneNumber: student.phoneNumber,
          progress: student.progress,
          percent: Number(student.percent),
          createdAt: Timestamp.now().toDate()
          
        });
  
        setIsLoading(false)
        setUploadProgress(0)
        setStudent({...initialState})
        toast.success("Student uploaded successfully");
        navigate('/all-student')
  
      } catch(error) {
        setIsLoading(false)
         toast.error(error.message)
      }
   };

   const editStudent = (e) =>{
      e.preventDefault()
      setIsLoading(true)
      if (student.imageURL !== studentEdit.imageURL) {
        const storageRef = ref(storage, studentEdit.imageURL);
         deleteObject(storageRef);
       }
  
        try {
  
           setDoc(doc(db, "students", id), {
               
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            age: Number(student.age),
            gender: student.gender,
            imageURL: student.imageURL,
            program: student.program,
            classz: student.classz,
            address: student.address,
            parentName: student.parentName,
            phoneNumber: student.phoneNumber,
            progress: student.progress,
            percent: Number(student.percent),
            createdAt: studentEdit.createdAt,
            editedAt: Timestamp.now().toDate(),
  
          });
  
          setIsLoading(false)
          toast.success("Student Edited successfully")
          navigate("/all-student")
  
        } catch(error) {
          setIsLoading(false)
          toast.error(error.message)
        }
   };

  return (
    <>
    {isLoading && <Loader/>}
    <div className="addStudent">
        <Sidebar/>
    <div className="addStudentContainer">
        <div className="addStudentWrapper">
    <div className="addtop">
        <h1 className="newStudent">{detectForm(id, "Add New Student", "Edit Student")}</h1>
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

            <form onSubmit={detectForm(id, addStudent, editStudent)} action="" className='formAdd'>
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
                        required name='firstName' value={student.firstName} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                
                    <div className="formInput">
                        <label>last Name</label>
                        <input type='text' 
                         required name='lastName' value={student.lastName}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Email</label>
                        <input type='text' 
                         required name='email' value={student.email}
                         onChange={(e)=>handleInputChange(e)}/>
                    </div>

                    <div className="formInput">
                        <label>Age</label>
                        <input type='number'  required 
                        name='age' value={student.age} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Gender</label>
                        <input type='text'  required 
                        name='gender' value={student.gender} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Parent Name</label>
                        <input type='text'  required 
                        name='parentName' value={student.parentName} 
                        
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Parent Contact</label>
                        <input type='text'  required 
                        name='phoneNumber' value={student.phoneNumber} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Address</label>
                        <input type='text'  
                        name='address' value={student.address} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Class</label>
                        <input type='text' required 
                        name='classz' value={student.classz} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    <div className="formInput">
                        <label>Progress</label>
                        <input type='text'   
                        name='progress' value={student.progress} 
                        onChange={(e)=>handleInputChange(e)} />
                    </div>

                    

                    <div className="formInput">
                        <label>Percent</label>
                        <input type='number'  
                        name='percent' value={student.percent}
                        onChange={(e)=>handleInputChange(e)} />
                    </div>
                    
            {student.imageURL === "" ? null : (
              <input style={{padding:"8px"}} type="text" name='imageURL' value={student.imageURL} 
              disabled onChange={(e)=>handleInputChange(e)} />
            )}

                    <div className="formInput">
                        <label>Student Program</label>
                        <select required name="program" value={student.program}
                         onChange={(e)=>handleInputChange(e)}>
                            <option value="" disabled>
                                -- Choose Student Class --
                            </option>
                           { classez.map((c) => (
                            <option value={c.name} key={c.id}>{c.name}</option>)
                            )}
                            
                        </select>
                    </div>

                
                 <button className='buttonAdd' type='submit'>
                 {detectForm(id, "Save Student", "Edit Student")}
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

export default AddStudent;
