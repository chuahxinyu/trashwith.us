const express = require('express');
const app = express();

const db = require('./models');

const { Items } = require("./models");

app.use(express.json());

app.get('/api/items', async (req, res) => {
    const listOfItem = await Items.findAll();
    res.json(listOfItem);
})

app.post('/api/items', async (req, res) => {
    const item = req.body;
    await Items.create(item);
    res.json(item);
});

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
