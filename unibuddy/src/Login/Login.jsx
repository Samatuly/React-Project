import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import './Login.css'
import { auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Profile from "../Profile/Profile";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      history('/profile');
    }).catch((error) => {
      setError("Invalid email or password. Please try again");
    })
  };

  return (
    <div className="auth-container">
        <img src='https://t3.ftcdn.net/jpg/05/24/35/54/360_F_524355469_Az3J86DbP9jC4hWovxp0XGo0MwjXaKXK.jpg' alt="Login" width='80%' />
        <h2>Login</h2>
        <form onSubmit={login}>
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

export default Login;