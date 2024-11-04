import React from "react";
import "./App.css";
import dashboard from "./assets/dashboard.png";
import facebookLogo from "./assets/Facebook_Logo_Primary.png";
import googleLogo from "./assets/web_light_rd_na@2x.png";
import MenuSidebar from "./components/MenuSidebar";

function App() {
  
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="logo">Hiphonic</h1>
        <div className="dashboard-preview">
          <img src={dashboard} alt="dashboard-image" className="dashboard" />
        </div>
        <p className="welcome-text">Welcome to your Dashboard</p>
        <p className="subtext">Everything you need to manage your online store</p>
      </div>
      <div className="right-section">
        <h2>Sign In to your Account</h2>
        <p>Welcome back! Please enter your details.</p>
        <form className="login-form">
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        <div className="social-login">
          <p>Or sign in with</p>
          <button className="social-btn google">
          <img src={googleLogo} alt="google logo" className="google-logo" />
          Google
          </button>
          <button className="social-btn facebook">
          <img src={facebookLogo} alt="facebook logo" className="facebook-logo" />
          Facebook
          </button>
        </div>
        <p className="sign-up">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
}

export default App;