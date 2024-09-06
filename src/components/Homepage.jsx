import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';


const Homepage = () => {
  return (
    <div>
      {/* <ButtonAppBar /> Use ButtonAppBar instead of Navbar */}
      <div className="homepage">
        <h1>Welcome to the Website</h1>
        <Link to='/signup'>Sign Up</Link>
        <br></br>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Homepage;
