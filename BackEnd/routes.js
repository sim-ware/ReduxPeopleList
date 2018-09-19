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

// router.get('/', function (req, res, next) {
//   return res.send('Hello World');
// });

// router.get('/:id', function (req, res, next) {
//   const id = req.params.id;
//   return res.send(String(id));
// });

router.get('/', async (req, res, next) => {
    try {
        const peopleSnapshot = await db.collection('people').get();
        const people = [];
        peopleSnapshot.forEach((doc) => {
            people.push({
                id: doc.id,
                name: doc.data().name
            });
        });
        res.json(people);
    } catch(e) {
        next(e);
    }
});


router.get('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('id is blank');
        const person = await db.collection('people').doc(id).get();
        if (!person.exists) {
            throw new Error('person does not exists');
        }
        res.json({
            id: person.id,
            name: person.data().name,
            rating: person.data().rating,
            birthday: person.data().birthday
        });
    } catch(e) {
        next(e);
    }
})

module.exports = router
