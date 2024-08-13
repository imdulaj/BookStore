import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import NavBar from "./components/NavBar";
import AddStudent from "./components/AddStudent";
import Logout from "./components/Logout";
import axios from "axios";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";


function App() {
  const[role, setRole] = useState('')


  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')
    .then(res => {
      if(res.data.login){
        setRole(res.data.role)
      }else{
        setRole('')
      }
      console.log(res)

    }).catch(err => console.log(err))
  },[])


  return (
    <Router>
      <NavBar role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setRoleVar={setRole}/>} />
        <Route path="/books" element={<Books role={role}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/logout" element={<Logout setRole={setRole} />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />

      </Routes>
    </Router>
  );
}

export default App;
