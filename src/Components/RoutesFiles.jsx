import React from 'react'
import Home from './Home'
import ContactUs from './ContactUs'
import Student from './Student'
import { Routes,Route } from 'react-router-dom'
import AddNewStudent from './AddNewStudent';
import EditStudent from "./EditStudent";

const RoutesFiles = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/student' element={<Student/>}></Route>

      <Route path='/contactus' element={<ContactUs/>}></Route>

      <Route path="/addnewstudent" element={<AddNewStudent/>} />
      <Route path="/editstudent" element={<EditStudent/>} />

    </Routes>
  )
}

export default RoutesFiles;