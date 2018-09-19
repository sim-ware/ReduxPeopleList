var express = require('express')
const router = express.Router()


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

let name = "Zinedine Zidane"
db.collection('people').where("name", "==", name).get().then(collection => {
  const name = collection.docs.map(doc => doc.data().name)
  const rating = collection.docs.map(doc => doc.data().rating)
  const birthday = collection.docs.map(doc => doc.data().birthday)
  console.log(name);
  console.log(rating);
  console.log(birthday);
});

router.get('/', function (req, res, next) {
  return res.send('Hello World');
});

// router.get('/', async (req, res, next) => {
//     try {
//         const noteSnapshot = await db.collection('notes').get();
//         const notes = [];
//         noteSnapshot.forEach((doc) => {
//             notes.push({
//                 id: doc.id,
//                 data: doc.data()
//             });
//         });
//         res.json(notes);
//     } catch(e) {
//         next(e);
//     }
// });
//
// router.get('/:id', async(req, res, next) => {
//     try {
//         const id = req.params.id;
//         if (!id) throw new Error('id is blank');
//         const note = await db.collection('notes').doc(id).get();
//         if (!note.exists) {
//             throw new Error('note does not exists');
//         }
//         res.json({
//             id: note.id,
//             data: note.data()
//         });
//     } catch(e) {
//         next(e);
//     }
// })

module.exports = router
