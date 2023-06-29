import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import  "./register.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your_email@cryptotart.com" id="email" name="email" />
            <label htmlFor="password">passie</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <Link to="/register">
        <button className="link-button"><i className="fas fa-heart-broken" style={{color: "#de3050"}}></i>No Account?  Register here!!<i className="fas fa-heart" style={{color: "#de3050"}}></i> </button>
        </Link>
        
        </div>
    );
}