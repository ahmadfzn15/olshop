import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCF3Z-EjuDC6yLealW8sFDCVD6y_bYdW5E",
  authDomain: "online-shop-df4c0.firebaseapp.com",
  projectId: "online-shop-df4c0",
  storageBucket: "online-shop-df4c0.appspot.com",
  messagingSenderId: "986291112523",
  appId: "1:986291112523:web:e6c73a1be4b67559275bce",
  measurementId: "G-JXX0EE4EYV",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage };
