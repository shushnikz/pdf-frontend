import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import MyPapers from './components/MyPapers';
import { Login } from './components/Login';
import { Register } from './components/Register';

const App = () => {


  return (
    <div className="App">
      {/* <div className="header">React sample</div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/mypapers" element={<ProtectedRoute><MyPapers /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("mern-crud-user")) {
    return props.children
  } else {
    return <Navigate to="/login" />
  }
}

