import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRWFca7E9W1JBLhJLVIKOHEU90t-CcbYk",
  authDomain: "local-food-lovers-project.firebaseapp.com",
  projectId: "local-food-lovers-project",
  storageBucket: "local-food-lovers-project.firebasestorage.app",
  messagingSenderId: "520590105673",
  appId: "1:520590105673:web:5d5588dd0566c363357398",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
