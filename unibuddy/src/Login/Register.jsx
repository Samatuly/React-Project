import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import './Login.css';

function Register() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const Register = (e) => {
    e.preventDefault();
    if(password == confirmPassword){
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        history('/login');
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else{
      setError("Passwords do not match");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={Register}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={Register}>Register</button>
        {error && <div className="error">{error}</div>}
        <Link to="/login" className="link">Already have an account? Login here.</Link>
      </form>
    </div>
  );
}

export default Register;
