import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firestore } from "../Firebase/Firebase";
import { addDoc, doc, setDoc, collection } from "firebase/firestore";
import "./Login.css";

function Register() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const Register = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      //Register new user with email/password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("User created successfully!", userCredential.user);
        })
        .then(async (userCredential) => {
          try {
            // Step 3: Store additional information in Firestore
            const usersCollectionRef = collection(firestore, "users");
            await addDoc(usersCollectionRef, {
              email: email,
              password: password,
              organizations: [],
              favoriteBooks: [],
              userId: auth?.currentUser.uid,
            });

            console.log("User registered successfully!");
          } catch (error) {
            console.error("Registration Error", error);
          }
        });
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className="auth-container register">
      <h2>Register</h2>
      <form onSubmit={Register} className="login_form">
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
        <button className="login-button" onClick={Register}>
          Register
        </button>
        {error && <div className="error">{error}</div>}
        <Link to="/signin" className="link-login">
          Already have an account? Login here.
        </Link>
      </form>
    </div>
  );
}

export default Register;
