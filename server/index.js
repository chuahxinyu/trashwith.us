const express = require('express');
const url = require('url');
const app = express();

const db = require('./models');

const { Items, Actions } = require("./models");

const cors = require('cors');
const ItemActions = require('./models/ItemActions');
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

app.get('/api/items', (req, res) => {
    
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
