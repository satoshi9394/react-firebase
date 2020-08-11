import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAb_6DkB-SnEZZN5ZllcZJm-NZa4exCfHA",
  authDomain: "roles-udemy-412d3.firebaseapp.com",
  databaseURL: "https://roles-udemy-412d3.firebaseio.com",
  projectId: "roles-udemy-412d3",
  storageBucket: "roles-udemy-412d3.appspot.com",
  messagingSenderId: "942419891152",
  appId: "1:942419891152:web:50d4e89d4f63df11d6dfd5"
}

firebase.initializeApp(firebaseConfig)

const db =  firebase.firestore()
const auth = firebase.auth()

export {db, auth, firebase}