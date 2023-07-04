import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCfRPp50LMHZGhRcDSutGCFJG8oVsiqrbA",
  authDomain: "financas-84111.firebaseapp.com",
  projectId: "financas-84111",
  storageBucket: "financas-84111.appspot.com",
  messagingSenderId: "323164747153",
  appId: "1:323164747153:web:17eee7d3b9b05b946e1630"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
