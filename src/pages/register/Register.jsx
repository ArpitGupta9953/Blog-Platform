import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
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
    console.log("Registration attempt:", formData);
    
   
    if (formData.username && formData.email && formData.password) {
      toast.success("🎉 Registration successful! Please login.", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/login");
    } else {
      toast.error("❌ Please fill in all fields", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          className="registerInput" 
          type="text" 
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username..." 
          required
        />
        <label>Email</label>
        <input 
          className="registerInput" 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email..." 
          required
        />
        <label>Password</label>
        <input 
          className="registerInput" 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password..." 
          required
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button 
        className="registerLoginButton" 
        type="button"
        onClick={handleLoginClick}
      >
        Login
      </button>
    </div>
  );
}
