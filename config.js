import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB5UJ9oGRIiKxxF8nNpxgKUdtElj3u_p-U",
    authDomain: "e-ride-7a64e.firebaseapp.com",
    projectId: "e-ride-7a64e",
    storageBucket: "e-ride-7a64e.appspot.com",
    messagingSenderId: "226715798110",
    appId: "1:226715798110:web:f6a93b7e319e71b02d42cf"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
