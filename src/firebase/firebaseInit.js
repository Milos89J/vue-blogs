
import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_Z8-yT1x73ugtbaGqv1AQgoCSPOUfb2I",
    authDomain: "vueblogs-78574.firebaseapp.com",
    projectId: "vueblogs-78574",
    storageBucket: "vueblogs-78574.appspot.com",
    messagingSenderId: "106136593141",
    appId: "1:106136593141:web:0f09701fa187c5b70e1bbc"
  };

  const app = initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();