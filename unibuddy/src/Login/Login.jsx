import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    
  };

  return (
    <div className="auth-container">
        <img src='https://t3.ftcdn.net/jpg/05/24/35/54/360_F_524355469_Az3J86DbP9jC4hWovxp0XGo0MwjXaKXK.jpg' alt="Login" width='80%' />
        <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
        <Link to="/register" className="link">Don't have an account? Register here.</Link>
    </div>
  );
}

export default Login;