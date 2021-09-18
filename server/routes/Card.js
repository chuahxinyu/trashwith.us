const express = require('express');
const router = express.Router();
const { Card } = require("../models");

// Everything in this file is useless
router.get('/', async (req, res) => {
    const listOfCards = await Card.findAll();
    res.json(listOfCards);
});

router.post('/', async (req, res) => {
    const card = req.body;
    await Cards.create(Card);
    res.json(card);
})

module.exports = router;