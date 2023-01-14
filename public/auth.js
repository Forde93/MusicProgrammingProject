// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { getFirestore , collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { setUpArtists } from './index.js';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwuuQp5uAESmn5kIMmd5r1OhftjivtmYk",
  authDomain: "spotifypoints-5a1ef.firebaseapp.com",
  databaseURL: "https://spotifypoints-5a1ef-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spotifypoints-5a1ef",
  storageBucket: "spotifypoints-5a1ef.appspot.com",
  messagingSenderId: "765783942780",
  appId: "1:765783942780:web:ee0e28a58391f6515ccbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const signupForm = document.querySelector('#signup-form');
const loginForm = document.querySelector('#login-form');
const logout = document.querySelector('#logout');

const auth = getAuth();
const db = getFirestore();


//--------------------Firebase Firestore--------------------//
const querySnapshot = await getDocs(collection(db, "topArtists"));
querySnapshot.forEach((doc) => {
  setUpArtists(querySnapshot.docs);
});



//--------------------Firebase Auth--------------------//

//Checking status of user
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
      const uid = user.uid;
      document.getElementById("userName").innerHTML = user.email;
      // ...
    } else {
      // User is signed out
      console.log('user logged out');
    }
  });

// signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});

// login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user.uid)
      //close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });
});