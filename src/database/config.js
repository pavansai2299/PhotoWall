import * as firebase from 'firebase';
// import 'firebase/compat/firestore';
// import { getDatabase } from "firebase/database";


var config = {
  apiKey: "AIzaSyD_Uxfkjj4xCJdFnzc74VT0smxOmSJPrNE",
  authDomain: "photowall-5669f.firebaseapp.com",
  databaseURL: "https://photowall-5669f-default-rtdb.firebaseio.com",
  projectId: "photowall-5669f",
  storageBucket: "photowall-5669f.appspot.com",
  messagingSenderId: "232062379919",
  appId: "1:232062379919:web:58595d2d61c9d3d7780dfa",
  measurementId: "G-L6M2JD0N1C"
};


firebase.initializeApp(config);
// Use these for db & auth
// const database = getDatabase(firebaseApp);

const database = firebase.database();

export {database}
   