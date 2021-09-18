const express = require('express');
const app = express();

const db = require('./models');

// Everything below this line is useless
const cardRouter = require('./routes/Card')
app.use("/cards", cardRouter);

// This is to check if it's working
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
