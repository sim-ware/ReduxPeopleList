const express = require('express');
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reactpeoplelist.firebaseio.com"
});

const db = admin.firestore();

db.settings({
  timestampsInSnapshots: true
});

db.collection('people').get().then(collection => {
  const data = collection.docs.map(doc => doc.data().name)
  // this.setState({ data });
  console.log(data);
});

app.get('/names/all', function (req, res) {
 return res.send('Hello World');
});

app.get('/mars', function (req, res) {
 return res.send('Hello Mars');
});

app.listen(process.env.PORT || 8080);
