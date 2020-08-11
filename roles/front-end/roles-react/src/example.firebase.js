import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'


const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxx"
}

firebase.initializeApp(firebaseConfig)

const db =  firebase.firestore()
const auth = firebase.auth()
const functions = firebase.functions()

export {db, auth, firebase, functions}