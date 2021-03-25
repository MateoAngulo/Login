import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdjQ8dO1Vc0WyG3m1O9WBP7bNdRhcx0BM",
    authDomain: "login-fb3c3.firebaseapp.com",
    projectId: "login-fb3c3",
    storageBucket: "login-fb3c3.appspot.com",
    messagingSenderId: "616824764406",
    appId: "1:616824764406:web:d2f01dd8909dae5510f9d7"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;