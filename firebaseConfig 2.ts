import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyC2yHqj-5BwVHWX-MsxamdrLIcp2J0jBnE",
  authDomain: "movies-f69aa.firebaseapp.com",
  databaseURL:
    "https://movies-f69aa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movies-f69aa",
  storageBucket: "movies-f69aa.appspot.com",
  messagingSenderId: "742228885288",
  appId: "1:742228885288:web:6cbba260c4c3eb65445a1d",
  measurementId: "G-TYL7TEE0EJ",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
