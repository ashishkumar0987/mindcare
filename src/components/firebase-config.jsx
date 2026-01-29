// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // Firestore के लिए add karo
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";  // Auth के लिए add karo

// Your web app's Firebase configuration (careformind project)
const firebaseConfig = {
  apiKey: "AIzaSyCuHp5PydwZYwnCyiBOQ94FbOMN7gLr-kE",
  authDomain: "careformind.firebaseapp.com",
  projectId: "careformind",
  storageBucket: "careformind.firebasestorage.app",
  messagingSenderId: "264235917439",
  appId: "1:264235917439:web:117fa6abd21336bf8d9f4a",
  measurementId: "G-4P4KM4K9X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  // Analytics (optional)

// Export the services (yeh zaroori hai CreatePost/Blogs/Login mein use ke liye)
export const db = getFirestore(app);  // Firestore डेटाबेस
export const auth = getAuth(app);     // Authentication
export const provider = new GoogleAuthProvider();  // Google Auth प्रोवाइडर

// Function to check authentication state
export const checkAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default app;  // Optional, agar kahin app use karna ho