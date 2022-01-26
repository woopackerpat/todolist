import React from 'react';

import './App.css';
import {Route,  Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Index from './components/index';


function App() {
  return (
  
      <Routes>
        <Route exact path = "/" element = {<Index />}/>
        <Route exact path = "/login" element = {<Login />}/>
        <Route exact path = "/register" element = {<Register />}/>
        <Route exact path = "/profile" element = {<Profile />}/>
 
      </Routes>
   
  );
}

export default App;
