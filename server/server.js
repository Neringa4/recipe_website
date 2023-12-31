require('dotenv').config()
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
        const db = client.db('recipe_database');
        const recipesCollection = db.collection('recipes');
        const recipesRouter = createRouter(recipesCollection);
        app.use('/api/recipes', recipesRouter);
    })
    .catch(console.error);

app.listen(process.env.PORT, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
