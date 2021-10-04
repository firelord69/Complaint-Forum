import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyCZT800jZDmJrF6cpXixqTC4ReamA8OH4E",
  authDomain: "brave-e6fc5.firebaseapp.com",
  databaseURL: "brave-e6fc5.firebaseio.com",
  projectId: "brave-e6fc5",
  storageBucket: "brave-e6fc5.appspot.com",
  messagingSenderId: "500640817097",
  appId: "1:500640817097:web:a18a6c10b85899f2985218"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

