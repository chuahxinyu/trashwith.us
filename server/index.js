const express = require('express');
const url = require('url');
const app = express();

const db = require('./models');

const { Items, Actions, ItemActions, sequelize, Suggestions } = require("./models");

const cors = require('cors');
const { QueryTypes } = require('sequelize');
let ALLOWED_ORIGINS = ["https://trashwithus.herokuapp.com", "http://trashwith.us/", "http://localhost:3000", "http://trashwith.us"];
app.use((req, res, next) => {
    let origin = req.headers.origin;
    let theOrigin = (ALLOWED_ORIGINS.indexOf(origin) >= 0) ? origin : ALLOWED_ORIGINS[0];
    res.header("Access-Control-Allow-Origin", theOrigin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
})

app.use(express.json());

app.get('/api/items', async (req, res) => {
    const q = url.parse(req.url, true);
    const qdata = q.query;

    if (qdata.id) {
        const action = await sequelize.query(
            'SELECT actionName, description FROM actions INNER JOIN itemactions ON itemactions.actionId = actions.id WHERE itemId = ?',
            {
                replacements: [qdata.id],
                type: QueryTypes.SELECT
            }
        );
        console.log(qdata.id);
        res.json(action);
    } else {
        const listOfItem = await Items.findAll();
        res.json(listOfItem);
    }
})

app.post('/api/items', async (req, res) => {
    const item = req.body;
    console.log(item);
    await Items.create(item);
    res.json(item);
});

app.post('/api/suggestions', async (req, res) => {
    const suggestion = req.body;
    console.log(suggestion);
    await Suggestions.create(suggestion);
    res.json(suggestion);
});

app.post('/api/actions', async (req, res) => {
    const action = req.body;
    await Actions.create(action);
    res.json(action);
});

app.post('/api/itemactions', async (req, res) => {
    const itemaction = req.body;
    await ItemActions.create(itemaction);
    res.json(itemaction);
});

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT ||3001, () => {
        console.log("Server running on port 3001");
    });
});
