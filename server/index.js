const express = require('express');
const url = require('url');
const app = express();

const db = require('./models');

const { Items, Actions, ItemActions, sequelize } = require("./models");

const cors = require('cors');
const { QueryTypes } = require('sequelize');
app.use(cors({
    origin: 'https://trashwithus.herokuapp.com'
}));

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
