import React, { createContext, useContext, useState, useEffect } from "react";
import { app } from "../firebaseConfig.js";

import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  //   collection,
  //   getDocs,
  //   getDoc,
  //   doc,
} from "firebase/firestore/lite";

const ERRORS = Object.freeze({
  "FirebaseError: Firebase: Error (auth/email-already-in-use).":
    "This email is already in use",
});
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const auth = getAuth();
  const [firebaseUser, setFirebaseUser] = useState(undefined);
  const db = getFirestore(app);

  const createUser = async (credentials) => {
    if (!credentials.email || !credentials.email) return false;
    if (credentials.password !== credentials.repeatedPassword) return false;

    try {
      let result = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      return {
        success: true,
        msg: "Registered! You can now login",
      };
    } catch (err) {
      return {
        success: false,
        msg: ERRORS[err],
      };
    }
  };

  const loginUser = async (credentials) => {
    try {
      let msg = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      setFirebaseUser(msg.user);

      return {
        success: true,
        msg: "Logged in",
      };
    } catch (err) {
      return {
        success: false,
        msg: ERRORS[err] ?? "Could not login",
      };
    }
  };
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setFirebaseUser(undefined);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const sendRecoveryEmail = async (userEmail) => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for
      // this URL must be whitelisted in the Firebase Console.
      url: "https:/adarealm.io",
      // This must be true for email link sign-in.
      // handleCodeInApp: true,
      // iOS: {
      //   bundleId: 'com.example.ios',
      // },
      // android: {
      //   packageName: 'com.example.android',
      //   installApp: true,
      //   minimumVersion: '12',
      // },
      // FDL custom domain.
      // dynamicLinkDomain: 'coolapp.page.link',
    };
    try {
      let msg = await sendPasswordResetEmail(auth, userEmail);

      return msg;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // let userData = await getUserData(user.uid);
        setFirebaseUser({ ...user });
      } else {
        setFirebaseUser(undefined);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    firebaseUser,
    loginUser,
    logoutUser,
    createUser,
    sendRecoveryEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
