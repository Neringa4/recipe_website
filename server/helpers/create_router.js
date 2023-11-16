const express = require('express');
const ObjectID = require('mongodb').ObjectId;

const createRouter = function (collection) {

    const router = express.Router();
    
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then(docs => res.json(docs))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

    router.get('/:id', (req, res) => {
        collection
        .findOne(
            {recipe_id: req.params.id}
        )
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    })

    router.post('/', (req, res) => {
        const newData = req.body;
        collection
        .insertOne(newData)
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        })
    })

    router.put('/:id', (req, res) => {
        const recipe_id = req.params.id
        const updatedData = req.body;
        collection
        .updateOne(
            {recipe_id: recipe_id},
            {$set: updatedData},
            {upsert: true}
        )
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    })
    
    return router;
}

module.exports = createRouter;