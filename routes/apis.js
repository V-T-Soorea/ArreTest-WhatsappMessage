const express = require('express');
const router = express.Router();

const User = require("../models/user");

// @route     POST /postMessage
// Adds message to the message Table in the DB with the sent time of the message, user and group.
router.post('/postMessage', (req, res) => {
    //get userID and groupID from user and group tables
    //Use userId and groupID to     
});

//@route    GET /paginatedMessage
//Get request for all the message of a particular group in paginated manner
router.get('/paginatedMessage', async (req, res) => {
    
});

module.exports = router;