const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBjPYBiDN6nMmXDExQ2fPKg7k92npODy9c",
  authDomain: "reactpeoplelist.firebaseapp.com",
  projectId: "reactpeoplelist"
});

var db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

exports.db = db;

//
// Should Create a Variable for the List of NameList
// And find a way for avoiding setting State

db.collection('people').get().then(collection => {
  const data = collection.docs.map(doc => doc.data().name)
  console.log(data);
  // see this ^^^^ variable - I want to keep it 
});


// ReUsable Functions for Dynamic DB calls
