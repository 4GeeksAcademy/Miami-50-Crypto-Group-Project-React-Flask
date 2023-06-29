import React, { useState } from "react";
import { Login } from "./Login";
import { Link } from "react-router-dom";
import  "./register.css";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [ name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        
        <div className="auth-form-container">
        <form className="register-form">
            <label htmlFor="name"> Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} 
            name="name" 
            id="name" 
            placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder="email@cryptotart.com" 
            id="email" 
            name="email" />
            <label htmlFor="password">Passie</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
            
        </form>
        <Link  to="/login">
        <button className="link-button">Already have an account? <i className="far fa-surprise" style={{color: "#de3050"}}></i>  Log In Here!!  <i className="far fa-smile-beam" style={{color: "#de3050"}}></i></button>
        </Link>
        <button className="reg-button" onClick={handleSubmit}>Register</button>
        </div>
       
    );
}