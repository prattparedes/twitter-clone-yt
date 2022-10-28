import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBEpqxbg3KWXOCLKTdk94F0yy-MIYJitgM",
    authDomain: "twitter-clone-yt-1b75f.firebaseapp.com",
    projectId: "twitter-clone-yt-1b75f",
    storageBucket: "twitter-clone-yt-1b75f.appspot.com",
    messagingSenderId: "919386943839",
    appId: "1:919386943839:web:4a7378ddd57b5c7c0146ea"
  };

  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth()
const storage = getStorage();

export { db, auth, provider, storage }