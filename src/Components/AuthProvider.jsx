import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();
const DEFAULT_NAME = "Umma Habiba";
const DEFAULT_PHOTO = "https://i.ibb.co/5WKPq1Ty/habiba.jpg";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  // 🔹 Helper: save/remove user in localStorage
  const saveUserToLocalStorage = (user) => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  };

  // 🔹 Register
  const registerUser = async (name, email, password, photoURL) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name || DEFAULT_NAME,
        photoURL: photoURL || DEFAULT_PHOTO,
      });

      const finalUser = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: name || DEFAULT_NAME,
        photoURL: photoURL || DEFAULT_PHOTO,
      };

      setUser(finalUser);
      saveUserToLocalStorage(finalUser);
      return finalUser;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Login (email/password)
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const u = result.user;
      const finalUser = {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName || DEFAULT_NAME,
        photoURL: u.photoURL || DEFAULT_PHOTO,
      };
      setUser(finalUser);
      saveUserToLocalStorage(finalUser);
      return finalUser;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Google Login
  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const u = result.user;
      const finalUser = {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName || DEFAULT_NAME,
        photoURL: u.photoURL || DEFAULT_PHOTO,
      };
      setUser(finalUser);
      saveUserToLocalStorage(finalUser);
      return finalUser;
    } catch (error) {
      console.error("Google Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Logout
  const logoutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      saveUserToLocalStorage(null);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const safeUser = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || DEFAULT_NAME,
          photoURL: currentUser.photoURL || DEFAULT_PHOTO,
        };
        setUser(safeUser);
        saveUserToLocalStorage(safeUser);
      } else {
        setUser(null);
        saveUserToLocalStorage(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Expose context
  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    loginWithGoogle,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
