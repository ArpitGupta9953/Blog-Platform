import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./login.css";

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    
    
    if (formData.email && formData.password) {
      
      if (onLogin) {
        onLogin(); 
      }
      navigate("/"); 
    } else {
      toast.error("❌ Please fill in all fields", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          className="loginInput" 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email..." 
          required
        />
        <label>Password</label>
        <input 
          className="loginInput" 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password..." 
          required
        />
        <button className="loginButton" type="submit">Login</button>
      </form>
      <button 
        className="loginRegisterButton" 
        type="button"
        onClick={handleRegisterClick}
      >
        Register
      </button>
    </div>
  );
}
