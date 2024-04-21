// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDxZYiYF7akCVloFT1kRFNIQwHFr0SnO4",
  authDomain: "ecom.com",
  projectId: "ecom",
  storageBucket: "ecom.com",
  messagingSenderId: "329104631147",
  appId: "1:329104631147:web:d907a1ab17c0f57df2182e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);