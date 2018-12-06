import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC0B9OnzOpZXqq9VVsUe499kq4M1jvWaHQ",
    authDomain: "poniedzialek-ee614.firebaseapp.com",
    databaseURL: "https://poniedzialek-ee614.firebaseio.com",
    projectId: "poniedzialek-ee614",
    storageBucket: "poniedzialek-ee614.appspot.com",
    messagingSenderId: "422717002922"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()