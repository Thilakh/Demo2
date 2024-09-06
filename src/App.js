import React from 'react';
import Homepage from './components/Homepage';
import Signuppage from './components/Signuppage';
import Loginpage from './components/Loginpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from '../src/components/Navbar'

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      {/* <Navbar /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/login"element={<Loginpage/>}></Route>
        <Route path="/signup"element={<Signuppage/>}></Route>
        <Route path=""element={<Homepage/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
