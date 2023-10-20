import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loginPhoto from '../Login/Login_page_photo.jpg';
import Profile from "../Profile/Profile";
import App from "../App";
import Register from "./Register";

const SignIn = (props) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      props.onSignIn();
      history('/home');
    }).catch(() => {
      setError("Invalid email or password. Please try again");
    })
  };

  return (
    <div className="auth-container">
        <img src={loginPhoto} alt="Login" width='60%'/>
        <h2>Login</h2>
        <form onSubmit={login} className="login_form">
          <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Login</button>
          {error && <div className="error">{error}</div>}
          <Link to="/register" className="link">Don't have an account? Register here.</Link>
        </form>      
    </div>
  );
}

export default SignIn;