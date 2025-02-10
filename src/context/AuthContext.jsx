import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); //Todu make this true

  const auth = getAuth(app);

  //   signUp
  const signupWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login facebook
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // github login
  const provider = new GithubAuthProvider();
  const githubLogin = () => {
    return signInWithPopup(auth, provider);
  };
  // logout
  const logout = () => {
    return signOut(auth);
  };

  // maneges stete

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const value = {
    user,
    signupWithEmail,
    loginWithEmail,
    googleLogin,
    facebookLogin,
    githubLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
