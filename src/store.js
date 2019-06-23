import { createStore, combineReducers, compose  } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// Reducers

const firebaseConfig = {
    apiKey: "AIzaSyCftGUc-gsASGb1fP82GM9YVIuMsKsLteg",
    authDomain: "reactpanel-1ce00.firebaseapp.com",
    databaseURL: "https://reactpanel-1ce00.firebaseio.com",
    projectId: "reactpanel-1ce00",
    storageBucket: "reactpanel-1ce00.appspot.com",
    messagingSenderId: "52899632493",
    appId: "1:52899632493:web:1a2660505b564272"
};

// React-Redux-Firebase Config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for profile instead realtime DB
}

// Init Firebase Instance
firebase.initializeApp(firebaseConfig);
// Init Firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) 
  )(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// Create Initial State
const initialState = {};

// Create Store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;