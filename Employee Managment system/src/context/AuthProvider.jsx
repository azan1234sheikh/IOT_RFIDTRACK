
import React, { useState, useEffect, createContext } from "react";
import { Auth, RTdatabase } from "../components/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { ref, get } from "firebase/database";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to Firebase Auth state
  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(Auth, async (firebaseUser) => {
      if (!isMounted) return;
      try {
        if (firebaseUser) {

          const snapshot = await get(ref(RTdatabase, firebaseUser.uid));
          const dbData = snapshot.exists() ? snapshot.val() : {};
          // const Keysnapshot = await get(ref(RTdatabase, firebaseUser.key));
          // // const firebaseKey = Keysnapshot.exists()?Keysnapshot.val():{};
          // console.log(Keysnapshot)
          setUser(dbData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth error:", error);
        setUser(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  // Login method
  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(Auth, email, password);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Logout method
  const logout = async () => {
    try {
      await signOut(Auth);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const fetchUserData = async (uid) => {
    if (!uid) return null;
    try {
      const snapshot = await get(ref(RTdatabase, uid));
      return snapshot.exists() ? snapshot.val() : null;
    } catch (error) {
      console.error("Fetch user data error:", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
