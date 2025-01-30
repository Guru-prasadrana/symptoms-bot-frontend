import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: "url('https://www.postdicom.com/images/blog-posts/Medical%20Imaging%20Science%20and%20Applications%20-%20Presented%20by%20PostDICOM.jpg')" }}>
      <div className="overlay">
        <div className="content">
          {/* Left Section: Image & Welcome Text */}
          <div className="left-side">
            <img
              src="https://play-lh.googleusercontent.com/DIle1Bqjt3fYCKw3H0G7-9ljwv7qN2J_hI_l40FVpOuh-dUfyokgk-bfyeDDIm-t4w=w240-h480-rw" // Replace with your own image URL
              alt="HealthMate"
              className="left-image"
            />
            <h1>Welcome to HealthMate</h1>
          </div>

          {/* Right Section: Login & Signup */}
          <div className="right-side">
            <div className="auth-section">
              <p>If you're already registered, click below to Login.</p>
              <Link to="/login" className="btn">Login</Link>
              <p>If you're new, click below to Signup.</p>
              <Link to="/signup" className="btn">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
