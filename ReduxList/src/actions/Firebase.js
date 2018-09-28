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
