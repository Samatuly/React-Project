import React from "react";
import { useAuthDetails } from "./useAuthDetailsHook";

export const AuthDetails = () => {
  const { authUser, userSignOut } = useAuthDetails();

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};
