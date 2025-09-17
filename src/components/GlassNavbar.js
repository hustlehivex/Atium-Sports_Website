import React from "react";
import './css/GlassNavbar.css';

export default function GlassNavbar() {
  return (
    <nav className="menu-bar">
      {/* Left side: logo + name */}
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" /> {/* replace with your logo */}
        <span className="logo-text">pride</span>
      </div>

      {/* Center: navigation links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Blogs & Videos</li>
        <li>Contact Us</li>
      </ul>

      {/* Right side: Login/Sign up buttons */}
      <div className="auth-buttons">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}
