import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
export const AuthContext = createContext();
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
function AuthWrapper({children}) {
  console.log("hello in AuthWrapper");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user)
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    })
    setLoading(false);
  },[])


    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
  
  function logout() {
    return signOut(auth);
  }
  

    const store = {
      login,
      logout,
      user
    }
    return (
      <AuthContext.Provider value={store}>
        {!loading && children}
      </AuthContext.Provider>
    );
}

export default AuthWrapper;