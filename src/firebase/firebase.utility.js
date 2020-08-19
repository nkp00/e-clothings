import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCKgp3ZxGEYnSz8oNH_Yw_qgTUbKL7bySo",
  authDomain: "e-clothingdb-589d2.firebaseapp.com",
  databaseURL: "https://e-clothingdb-589d2.firebaseio.com",
  projectId: "e-clothingdb-589d2",
  storageBucket: "e-clothingdb-589d2.appspot.com",
  messagingSenderId: "9571721892",
  appId: "1:9571721892:web:7d647dd40f94654ff03c31",
  measurementId: "G-0RSD0F0KFX",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
