import { initializeApp, getApps } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9UMlPmM5HvEk8kF4A4dnx2Kz-728d5WQ",
  authDomain: "ada-realm.firebaseapp.com",
  projectId: "ada-realm",
  storageBucket: "ada-realm.appspot.com",
  messagingSenderId: "409284823681",
  appId: "1:409284823681:web:34d21fe95eda3ed390db80",
};

const app = initializeApp(firebaseConfig);
if (getApps.length <= 0) {
  const app = initializeApp(firebaseConfig);
}

export { app };
