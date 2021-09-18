const express = require('express');
const url = require('url');
const app = express();

const db = require('./models');

const { Items, Actions, ItemActions } = require("./models");

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.get('/api/items', async (req, res) => {
    const q = url.parse(req.url, true);
    const qdata = q.query;

    if (qdata.id) {
        const action = Actions.findAll({
            attributes: ['actionName', 'description'],
            where: {ItemId: qdata.id},
            include: [{
                model: ItemActions,
                required: true
            }]
        });
        console.log(qdata.id);
        res.json(action);
    } else {
        const listOfItem = await Items.findAll();
        res.json(listOfItem);
    }
})

app.post('/api/items', async (req, res) => {
    const item = req.body;
    await Items.create(item);
    res.json(item);
});

app.post('/api/actions', async (req, res) => {
    const action = req.body;
    await Actions.create(action);
    res.json(action);
})

app.post('/api/itemactions', async (req, res) => {
    const itemaction = req.body;
    await ItemActions.create(itemaction);
    res.json(itemaction);
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
