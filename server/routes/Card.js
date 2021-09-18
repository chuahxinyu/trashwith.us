const express = require('express');
const router = express.Router();
const { Card } = require("../models");

// Everything in this file is useless
router.get('/', async (req, res) => {
    const listOfCards = await Card.findAll();
    res.json(listOfCards);
});

module.exports = router;