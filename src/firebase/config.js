import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAIAwA2PDF7OGYBxh_UaK8ol9sWw-IvzNc",
    authDomain: "cooking-site-project.firebaseapp.com",
    projectId: "cooking-site-project",
    storageBucket: "cooking-site-project.appspot.com",
    messagingSenderId: "1041962514432",
    appId: "1:1041962514432:web:a04d254e2d9092876b40e5"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }