import { useSelector } from 'react-redux';
import './studentPage.css';
import { selectEmail } from '../../redux/slice/authSlice';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";




const StudentPage = () => {
    
    const [students, setStudents] = useState([])
    const [student, setStudent] = useState({})
    
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
       getStudents()
    }, [])

    const getStudents = () =>{
        setIsLoading(true)
        try {
            const studentsRef = collection(db, "students")
            const q = query(studentsRef, orderBy("createdAt", "desc"));

        
 onSnapshot(q, (snapshot) => {
  
    // console.log(snapshot.docs)
    const allStudents = snapshot.docs.map((doc)=>({
        id: doc.id, ...doc.data()
    }))
    console.log(allStudents);
    setStudents(allStudents);
});
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
        }
    };

    const email = useSelector(selectEmail)

    useEffect(()=>{
        const getStudent = students.find((s)=> s.email === email);
        if(getStudent){
            setStudent(getStudent)
        }
    }, [email, students])
    
    
    
    
    console.log(student)

  return (
    <div className='studentPage'>
        <h2>Personal Profile:</h2>
        <img src={student.imageURL} alt="" className='studentImg'/>

      <div className='studentWrapper'>
        <div className='topStudent'>
            
            <div className='studentDetails pad'>
                <h3>First Name:</h3>
                <span>{student.firstName}</span>
            </div>

            <div className='studentDetails pad'>
                <h3>Last Name:</h3>
                <span>{student.lastName}</span>
            </div>

            

            <div className='studentDetails pad'>
                <h3>Age:</h3>
                <span>{student.age}</span>
            </div>
            <div className='studentDetails'>
                <h3>Progress:</h3>
            <div className="circular-progressbar">
        <CircularProgressbar value={student.percent} text={`${student.progress}%`} strokeWidth={5}/>
        </div>
        
            </div>
        </div>
        <div className='bottomStudent'>
        <div className='studentDetails pad'>
                <h3>Programme:</h3>
                <span>{student.program}</span>
            </div>

            <div className='studentDetails pad'>
                <h3>Parent Name:</h3>
                <span>{student.parentName}</span>
            </div>

            <div className='studentDetails pad'>
                <h3>Parent Contact:</h3>
                <span>{student.phoneNumber}</span>
            </div>

            <div className='studentDetails pad'>
                <h3>Address</h3>
                <span>{student.address}</span>
            </div>
            
            
        </div>
        
      </div>
      <div className='croomContainer'>
         {student.classz === "Beginner One" && 
            (<div className='croom'>
            <h2><a href="https://classroom.google.com/c/NzQ4Mjk1ODY3OTQ2?cjc=4omj4iz" 
            target="_blank">&#x2794; Beginner One Lesson </a></h2>
        </div>)} 
        {student.classz === "Beginner Two" && 
            (<div className='croom'>
            <h2><a href="https://classroom.google.com/c/NzQ4Mjk2MDIyODAy?cjc=wm37ymx
" 
            target="_blank">&#x2794; Beginner Two Lesson </a></h2>
        </div>)} 
        { student.classz === "Nursery One" && 
                (<div className='croom'>
                <h2><a href="https://classroom.google.com/c/NzUwNzUzNTIwODIz?cjc=yiq6llr" target="_blank">&#x2794; Nursey 1 Lesson </a></h2>
            </div>)} 
             {student.classz === "Nursery Two" && 
                (<div className='croom'>
                <h2><a href="https://classroom.google.com/c/NzUwNzUzNjM3MTU0?cjc=xawaevt" target="_blank">&#x2794; Nursey 2 Lesson </a></h2>
            </div>)} 
            { student.classz === "Primary One" && 
                (<div className='croom'>
                <h2><a href="https://classroom.google.com/c/NzUwNzUzMDkxNzYy?cjc=4ohlwjt" target="_blank">&#x2794; Primary 1 Lesson </a></h2>
            </div>)} 
            { student.classz === "Primary Two" &&
                (<div className='croom'>
                <h2><a href="https://classroom.google.com/c/NzUwNzUzNzIwMjgx?cjc=cisq6pn" target="_blank">&#x2794; Year 2 Lesson </a></h2>
            </div>)} 
             {student.classz === "Primary Three" && 
                (<div className='croom'>
                <h2><a href="https://https://classroom.google.com/c/NzQ4MjkzNzQ5MDc4?cjc=otqnw6z" target="_blank">&#x2794; Year 3 Lesson </a></h2>
            </div>)} 
            { student.classz === "Primary Four" &&
             (<div className='croom'>
                <h2><a href="https://classroom.google.com/c/NzQ4MjkzNzQ5MDc4?cjc=otqnw6z" target="_blank">&#x2794; Year 4 Lesson </a></h2>
            </div>)
            }
            </div>
    </div>
  );
}

export default StudentPage;
