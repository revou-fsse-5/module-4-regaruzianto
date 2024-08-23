import React from 'react';
import './App.css';
import RegisterForm from './Components/RegisterForm';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './Components/Category';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/category' element={<Category />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
