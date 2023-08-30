import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "my-movies-84807.firebaseapp.com",
  projectId: "my-movies-84807",
  storageBucket: "my-movies-84807.appspot.com",
  messagingSenderId: "208745601095",
  appId: "1:208745601095:web:4e6656076f06831b973962",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

// import.meta.env.VITE_SOME_KEY
