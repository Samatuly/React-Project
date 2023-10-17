import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase';
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const SignOut = () => {
    const history = useNavigate();
    signOut(auth).then(() => {
      history('/login');
    }).catch((error) => console.log(error));
}

export default SignOut;