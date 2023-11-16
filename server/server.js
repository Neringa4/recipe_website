const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017')
    .then((client) => {
        const db = client.db('recipe_database');
        const recipesCollection = db.collection('recipes');
        const recipesRouter = createRouter(recipesCollection);
        app.use('/api/recipes', recipesRouter);
    })
    .catch(console.error);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
