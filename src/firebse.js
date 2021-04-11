import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCWpf5BIvXKAfcGYXGrMDyneC-ugd5KEt4",
    authDomain: "makemytrip-668ee.firebaseapp.com",
    projectId: "makemytrip-668ee",
    storageBucket: "makemytrip-668ee.appspot.com",
    messagingSenderId: "745581208918",
    appId: "1:745581208918:web:ac6cb10ff66112096f22f7",
    measurementId: "G-9JSW9KE1WR"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  export {db,auth,storage}