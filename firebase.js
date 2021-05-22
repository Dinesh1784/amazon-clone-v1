import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbkayiK4wC9C60rclBHJd2rB5A5uLu_MM",
  authDomain: "amaz-clone-v1.firebaseapp.com",
  projectId: "amaz-clone-v1",
  storageBucket: "amaz-clone-v1.appspot.com",
  messagingSenderId: "27030849801",
  appId: "1:27030849801:web:33e2e1d5428548ec332bd8",
  measurementId: "G-6SNHLBHD33",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

export default db;
