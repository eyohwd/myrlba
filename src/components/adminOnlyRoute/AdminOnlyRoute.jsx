
import { useSelector } from 'react-redux';
import { selectEmail } from '../../redux/slice/authSlice';



const AdminOnlyRoute = ({children}) => {
    const userEmail = useSelector(selectEmail)
    console.log(userEmail)
  if (userEmail === "paylesslpg@gmail.com") {
      return children;
      
  }

  

};


export const AdminOnlyLink = ({children}) => {
  const userEmail = useSelector(selectEmail)
  
if (userEmail === "paylesslpg@gmail.com") {
    return children
}
  return null;
      
};


export const UserOnlyLink = ({children}) => {
  const userEmail = useSelector(selectEmail)
  
if (userEmail) {
    return children
}
  return null;
      
};



export const TeacherOnlyRoute = ({children}) => {
  const userEmail = useSelector(selectEmail)
  
if (userEmail === "ese@gmail.com") {
    return children
}
  return null;
      
};

export const Teacher02OnlyRoute = ({children}) => {
  const userEmail = useSelector(selectEmail)
  
if (userEmail === "joy@gmail.com") {
    return children
}
  return null;
      
};

export const TeacherP1OnlyRoute = ({children}) => {
  const userEmail = useSelector(selectEmail)
  
if (userEmail === "elizabeth@gmail.com") {
    return children
}
  return null;
      
};



export const TeacherOnlyLink = ({children}) => {
  const userEmail = useSelector(selectEmail)
  
if (userEmail === "ese@gmail.com") {
    return children
}
  return null;
      
};

export const Teacher02OnlyLink = ({children}) => {
  const userEmail = useSelector(selectEmail)
  
if (userEmail === "joy@gmail.com") {
    return children
}
  return null;
      
};

export const TeacherP1OnlyLink = ({children}) => {
  const userEmail = useSelector(selectEmail)
  
if (userEmail === "elizabeth@gmail.com") {
    return children
}
  return null;
      
};


export default AdminOnlyRoute;

