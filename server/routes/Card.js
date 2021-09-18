const express = require('express');
const router = express.Router();
const { Items } = require("../models");

// Gets all records from `items`
router.get('/', async (req, res) => {
    const listOfItems = await Items.findAll();
    res.json(listOfItems);
});

router.post('/', async (req, res) => {
    const item = req.body;
    await Items.create(item);
    res.json(item);
})

module.exports = router;