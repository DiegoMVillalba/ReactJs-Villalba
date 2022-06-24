
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyArneYQNzflJFs0Ecj8QQW9mcvPbSWY2JA",
  authDomain: "reactjs-diegovillalba.firebaseapp.com",
  projectId: "reactjs-diegovillalba",
  storageBucket: "reactjs-diegovillalba.appspot.com",
  messagingSenderId: "686552413336",
  appId: "1:686552413336:web:82825d71176bdd2510cced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const getFirestoreApp = () =>{
    return app;
}