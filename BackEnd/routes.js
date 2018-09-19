const express = require('express')
const router = express.Router()
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reactpeoplelist.firebaseio.com"
});

const db = admin.firestore();

db.settings({
  timestampsInSnapshots: true
});

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
