import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  User,
} from "firebase/auth";

import {
  getFirestore,
  doc, 
  getDoc,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa7aRSXR18lWjyYHA5EcWVdp2DtmLD8jw",
  authDomain: "apparel-store-db-6db06.firebaseapp.com",
  projectId: "apparel-store-db-6db06",
  storageBucket: "apparel-store-db-6db06.appspot.com",
  messagingSenderId: "80807076635",
  appId: "1:80807076635:web:aeb4defadab79d081fa9be",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, 'user', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch(err){
      console.log('error creating user', err);
    }
  }

  return userDocRef; 
}