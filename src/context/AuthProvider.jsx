import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);*/

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
        };
        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem("authUser");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth: Boolean(user),
        login,
        logout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
