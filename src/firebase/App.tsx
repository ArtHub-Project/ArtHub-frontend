// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAODV7Lw1lpa9mRRgWipC4rANok3XjJzsY',
  authDomain: 'reactjs-firebase-typescr-7f3d1.firebaseapp.com',
  projectId: 'reactjs-firebase-typescr-7f3d1',
  storageBucket: 'reactjs-firebase-typescr-7f3d1.appspot.com',
  messagingSenderId: '309272802638',
  appId: '1:309272802638:web:1356405a055491c6c59a1f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
