import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQRFt42IiJdqyXmd99bWCdupTE5GZIhZI",
    authDomain: "tienda-lol-reactjs.firebaseapp.com",
    projectId: "tienda-lol-reactjs",
    storageBucket: "tienda-lol-reactjs.appspot.com",
    messagingSenderId: "228513969280",
    appId: "1:228513969280:web:8652dc2aa8dfd868f92265"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}
