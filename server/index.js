const express = require('express');
const app = express();

const db = require('./models');

// Routers
const cardRouter = require('./routes/Card')
app.use("/cards", cardRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
