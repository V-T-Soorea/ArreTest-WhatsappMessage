const express = require('express');
const router = express.Router();

const User = require("../models/user");

// @route     POST /postMessage
// Adds message to the message Table in the DB with the sent time of the message, user and group.
router.post('/postMessage', (req, res) => {
    const user = new User({
        title: req.body.title,
        description: req.body.description
    });

    res.status(201).json({
        message: 'Handling POST requests to /posts'
    });
});




module.exports = router;