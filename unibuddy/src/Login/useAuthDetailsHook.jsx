import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth"; // Assuming you have initialized 'auth' from firebase
import { useState, useEffect } from "react";
import { auth } from "../Firebase/Firebase";
export const useAuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return { authUser, userSignOut };
};
