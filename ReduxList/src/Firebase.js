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

var data = [];

//
// Promise.all() as Asynchronous Equivalent of a For-Loop
// https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
//////////////////////////////////////////////////////////////////////
// NOT WORKING
// I want to remove() all docs
// db.allDocs({include_docs: true}).then(function (result) {
//   result.rows.forEach(function (row) {
//     db.remove(row.doc);
//   });
// }).then(function () {
//   // I naively believe all docs have been removed() now!
// });
//
// 
// USING PROMISE.ALL
// db.allDocs({include_docs: true}).then(function (result) {
//   return Promise.all(result.rows.map(function (row) {
//     return db.remove(row.doc);
//   }));
// }).then(function (arrayOfResults) {
//   // All docs have really been removed() now!
// });
db.collection("people").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        data.push(doc.data().name)
    });
});

db.collection('people').get().then(collection => {
  const data = collection.docs.map(doc => doc.data().name)
  // this.setState({ data });
});

// console.log(data);

// ReUsable Functions for Dynamic DB calls
