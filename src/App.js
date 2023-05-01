
import './App.css';
import  {BrowserRouter,Route,Routes} from 'react-router-dom'
import Avatar from './Avatar';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProfileCard from './ProfileCard';
import Attendance from './Attendance';
function App() {
  const[data,setData]=useState({
    name:"Ayushi Chauchan",
    email:"ayu123@gmail.com",
    phone:7007436861,
    address:"Lucknow",
    bio:"Software developer",
    pic:"img/pic.jpg",
    day:"monday",
    date:"01-05-2023",
    status:"Present"
    })
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Avatar data={data}/>}/>
    <Route path='/profile-card' element={<ProfileCard data={data}/>}/>
    <Route path='/attendance' element={<Attendance data={data}/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
