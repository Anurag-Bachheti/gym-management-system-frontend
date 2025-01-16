import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './pages/Header';
import Login from './pages/Login';
// import Home from "./pages/Home";
// import Register from "./pages/Register"; 

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      {/* <Route path="/register" element={<Register/>} /> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
