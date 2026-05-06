// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBNQlNjsJCp4v1bH4RWF5m9akC25z85vAM",
  authDomain: "prepwise-9232c.firebaseapp.com",
  projectId: "prepwise-9232c",
  storageBucket: "prepwise-9232c.firebasestorage.app",
  messagingSenderId: "200589917295",
  appId: "1:200589917295:web:74eb3a8f726f1b1d67219a",
  measurementId: "G-QCC1K7JX18",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
