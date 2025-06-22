import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import Videoplayer2 from "./components/videoplayer2/Videoplayer2";
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import VideoPlayer1 from "./components/videoplayer1/Videoplayer1";
import VideoPlayer3 from "./components/videoplayer3/Videoplayer3";
import VideoPlayer4 from "./components/videoplayer4/Videoplayer4";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeP";
import AboutP from "./pages/AboutP";
import CrecheP from "./pages/CrecheP";
import PreschoolP from "./pages/PreschoolP";
import SchoolPhotoP from "./pages/SchoolPhotoP";
import ElementaryP from "./pages/ElementaryP";
import BlogP from "./pages/BlogP";
import AdmissionP from "./pages/AdmissionP";
import TestimonialP from "./pages/TestimonialP";
import ContactUsP from "./pages/ContactUsP";
import ProgramP from "./pages/ProgramP";
import Footer from "./components/footer/Footer";
import './style/dark.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/lightModeContext";
import RegisterP from "./pages/RegisterP";
import LoginP from "./pages/LoginP";
import AddStudent from "./components/admin/addStudent/AddStudent";
import AdminHome from "./components/admin/home/AdminHome";
import NotFound from "./components/notFound/NotFound";
import StudentPage from "./components/studentPage/StudentPage";
import AdminOnlyRoute, { Teacher02OnlyRoute, TeacherOnlyRoute, TeacherP1OnlyRoute } from "./components/adminOnlyRoute/AdminOnlyRoute";
import ViewStudent from "./components/admin/viewStudent/ViewStudent";
import AddTeacher from "./components/admin/addTeacher/AddTeacher";
import ViewTeacher from "./components/admin/viewTeacher/ViewTeacher";
import HomenOnenFirst from "./components/adminB1/homeN1/HomenOnenFirst";
import AddNurseryOneFirstTerm from "./components/adminB1/addNurseryOneFirstTerm/AddNurseryOneFirstTerm";
import ViewNurseryOneFirstTerm from "./components/adminB1/viewNurseryOneFirstTerm/ViewNurseryOneFirstTerm";
import AddNurseryOneSecondTerm from "./components/adminB1/addNurseryOneSecondTerm/AddNurseryOneSecondTerm";
import ViewNurseryOneSecondTerm from "./components/adminB1/viewNurseryOneSeconTerm/ViewNurseryOneSecondTerm";
import ViewNurseryOneThirdTerm from "./components/adminB1/viewNurseryOneThirdTerm/ViewNurseryOneThirdTerm";
import AddNurseryOneThirdTerm from "./components/adminB1/addNurseryOneThirdTerm/AddNurseryOneThirdTerm";
import HomenTwoFirst from "./components/adminN2/homeN2/homenTwoFirst";
import AddNTwoFirstTerm from "./components/adminN2/addNTwoFirstTerm/AddNTwoFirstTerm";
import ViewNTwoFirstTerm from "./components/adminN2/viewNTwoFirstTerm/ViewNTwoFirstTerm";
import ViewNTwoSecondTerm from "./components/adminN2/viewNTwoSecondTerm/ViewNTwoSecondTerm";
import AddNTwoSecondTerm from "./components/adminN2/addNTwoSecondTerm/AddNTwoSecondTerm";
import AddNTwoThirdTerm from "./components/adminN2/addNTwoThirdTerm/AddNTwoThirdTerm";
import ViewNTwoThirdTerm from "./components/adminN2/viewNTwoThirdTerm/ViewNTwoThirdTerm";
import HomepOneFirst from "./components/adminP1/homeP1/homepOneFirst";
import AddPOneFirstTerm from "./components/adminP1/addPOneFirstTerm/AddPoneFirstTerm";
import ViewPOneFirstTerm from "./components/adminP1/viewPOneFirtTerm/ViewPOneFirstTerm";
import AddPOneSecondTerm from "./components/adminP1/addPOneSecondTerm/AddPOneSecondTerm";
import ViewPOneSecondTerm from "./components/adminP1/viewPOneSecondTerm/ViewPOneSecondTerm";
import AddPOneThirdTerm from "./components/adminP1/addPOneThirdTerm/AddPOneThirdTerm";
import ViewPOneThirdTerm from "./components/adminP1/viewPOneThirdTerm/ViewPOneThirdTerm";
import HomePTwoFirst from "./components/adminP2/homeP2/HomePTwoFirst";
import AddPTwoFirstTerm from "./components/adminP2/addPTwoFirstTerm/AddPTwoFirstTerm";
import ViewPTwoFirstTerm from "./components/adminP2/viewPTwoFirstTerm/ViewPTwoFirstTerm";
import AddPTwoSecondTerm from "./components/adminP2/addPTwoSecondTerm/AddPTwoSecondTerm";
import ViewPTwoSecondTerm from "./components/adminP2/viewPTwoSecondTerm/ViewPTwoSecondTerm";
import AddPTwoThirdTerm from "./components/adminP2/addPTwoThirdTerm/AddPTwoThirdTerm";
import ViewPTwoThirdTerm from "./components/adminP2/viewPTwoThirdTerm/ViewPTwoThirdTerm";




const App = () => {
  const {darkMode}= useContext(DarkModeContext)
  const [playState, setPlayState ] = useState(false);
  const [playState1, setPlayState1 ] = useState(false);
  const [ playState2, setPlayState2 ] = useState(false);
  const [ playState3, setPlayState3 ] = useState(false);
  const [ playState4, setPlayState4 ] = useState(false);
  return (
    <>
    <ToastContainer/>
    <div className={darkMode ?"app dark-mode" : "light"}>
       
      
    <Navbar/>
        
          <Routes>
            <Route   path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutP setPlayState1={setPlayState1} 
            setPlayState3={setPlayState3} setPlayState4={setPlayState4}/>}/>
            <Route path='/creche' element={<CrecheP setPlayState4={setPlayState4}/>}/>
            <Route path='preschool' element={<PreschoolP setPlayState2={setPlayState2}/>}/>
            <Route path='/elementary' element={<ElementaryP setPlayState={setPlayState}/>}/>
            <Route path='/schoolphoto' element={<SchoolPhotoP/>}/>
            <Route path='/blog' element={<BlogP/>}/>
            <Route path='/program' element={<ProgramP/>}/>
            <Route path='/admission' element={<AdmissionP/>}/>
            <Route path='/testimonial' element={<TestimonialP/>}/>
            <Route path='/contactus' element={<ContactUsP/>}/>
            <Route path='/register' element={<RegisterP/>}/>
            <Route path='/login' element={<LoginP/>}/>
            <Route path="/admin-home" element={<AdminOnlyRoute><AdminHome/></AdminOnlyRoute>}/>
            <Route path="/admin-homenone" element={<TeacherOnlyRoute><HomenOnenFirst/></TeacherOnlyRoute>} />
            <Route path="/add-nurseryonefirstterm/:id" element={<AddNurseryOneFirstTerm/>} />
            <Route path="/all-nurseryoneresultfirstterm" element={<ViewNurseryOneFirstTerm/>} />
            <Route path="/add-nurseryonesecondterm/:id" element={<AddNurseryOneSecondTerm/>} />
            <Route path="/all-nurseryoneresultsecondterm" element={<ViewNurseryOneSecondTerm/>} />
            <Route path="/add-nurseryonethirdterm/:id" element={<AddNurseryOneThirdTerm/>} />
            <Route path="/all-nurseryoneresultthirdterm" element={<ViewNurseryOneThirdTerm/>} />
            <Route path="/admin-homentwo" element={<Teacher02OnlyRoute><HomenTwoFirst/></Teacher02OnlyRoute>} />
            <Route path="/add-nurserytwofirstterm/:id" element={<AddNTwoFirstTerm/>} />
            <Route path="/add-nurserytwosecondterm/:id" element={<AddNTwoSecondTerm/>} />
            <Route path="/add-nurserytwothirdterm/:id" element={<AddNTwoThirdTerm/>} />
            <Route path="/all-nurserytworesultfirstterm" element={<ViewNTwoFirstTerm/>} />
            <Route path="/all-nurserytworesultsecondterm" element={<ViewNTwoSecondTerm/>} />
            <Route path="/all-nurserytworesultthirdterm" element={<ViewNTwoThirdTerm/>} />
            <Route path="/admin-homepone" element={<TeacherP1OnlyRoute><HomepOneFirst/></TeacherP1OnlyRoute>} />
            <Route path="/add-primaryonefirstterm/:id" element={<AddPOneFirstTerm/>} />
            <Route path="/all-primaryoneresultfirstterm" element={<ViewPOneFirstTerm/>} />
            <Route path="/add-primaryonesecondterm/:id" element={<AddPOneSecondTerm/>} />
            <Route path="/all-primaryoneresultsecondterm" element={<ViewPOneSecondTerm/>} />
            <Route path="/add-primaryonethirdterm/:id" element={<AddPOneThirdTerm/>} />
            <Route path="/all-primaryoneresultthirdterm" element={<ViewPOneThirdTerm/>} />
            <Route path="/admin-homeptwo" element={<TeacherP1OnlyRoute><HomePTwoFirst/></TeacherP1OnlyRoute>} />
            <Route path="/add-primarytwofirstterm/:id" element={<AddPTwoFirstTerm/>} />
            <Route path="/all-primarytworesultfirstterm" element={<ViewPTwoFirstTerm/>} />
            <Route path="/add-primarytwosecondterm/:id" element={<AddPTwoSecondTerm/>} />
            <Route path="/all-primarytworesultsecondterm" element={<ViewPTwoSecondTerm/>} />
            <Route path="/add-primarytwothirdterm/:id" element={<AddPTwoThirdTerm/>} />
            <Route path="/all-primarytworesultthirdterm" element={<ViewPTwoThirdTerm/>} />
            <Route path="/add-student/:id" element={<AdminOnlyRoute><AddStudent/></AdminOnlyRoute>}/>
            <Route path="/add-teacher/:id" element={<AdminOnlyRoute><AddTeacher/></AdminOnlyRoute>}/>
            <Route path="/all-student" element={<AdminOnlyRoute><ViewStudent/></AdminOnlyRoute>}/>
            <Route path="/all-teacher" element={<AdminOnlyRoute><ViewTeacher/></AdminOnlyRoute>}/>
            <Route path="/student-page" element={<StudentPage/>}/>
            <Route path="/*" element={<NotFound/>}/>
           

          </Routes>
  
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
       <VideoPlayer1 playState1={playState1} setPlayState1={setPlayState1}/>
       <Videoplayer2 playState2={playState2} setPlayState2={setPlayState2}/>
       <VideoPlayer3 playState3={playState3} setPlayState3={setPlayState3}/>
       <VideoPlayer4 playState4={playState4} setPlayState4={setPlayState4}/>
       <Footer/>
    </div>
    </>
  );
}

export default App;
