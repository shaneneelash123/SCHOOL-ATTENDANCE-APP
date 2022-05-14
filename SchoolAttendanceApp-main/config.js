import firebase from "firebase";

//initialize your database
const firebaseConfig = {
    apiKey: "AIzaSyApnpJcZqWwFyDu-97VqzNUoLu4Nfft7ho",
    authDomain: "schoolattendanceapp-bf023.firebaseapp.com",
    databaseURL: "https://schoolattendanceapp-bf023-default-rtdb.firebaseio.com",
    projectId: "schoolattendanceapp-bf023",
    storageBucket: "schoolattendanceapp-bf023.appspot.com",
    messagingSenderId: "374800738251",
    appId: "1:374800738251:web:ecc7da3ecaa4248e26b84e"
  };

  // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database()
 

  