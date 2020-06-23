import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHsOAyqbrAv1fYVdLCFltVLYOnvE13Yiw",
  authDomain: "crud-udemy-react-d30fa.firebaseapp.com",
  databaseURL: "https://crud-udemy-react-d30fa.firebaseio.com",
  projectId: "crud-udemy-react-d30fa",
  storageBucket: "crud-udemy-react-d30fa.appspot.com",
  messagingSenderId: "302769682949",
  appId: "1:302769682949:web:cd7c513afc0fc952ba3a6c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}