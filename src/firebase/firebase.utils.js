import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCgCyGokGd5YsKcO_5YFfOd2DO8qTu9Odc",
    authDomain: "com1-db.firebaseapp.com",
    databaseURL: "https://com1-db.firebaseio.com",
    projectId: "com1-db",
    storageBucket: "com1-db.appspot.com",
    messagingSenderId: "134057530272",
    appId: "1:134057530272:web:ea5682c6f9b74922a14ac5",
    measurementId: "G-FCZD9MQGK4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exist) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;