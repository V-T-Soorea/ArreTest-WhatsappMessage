const express = require('express');
const router = express.Router();

const User = require("../models/user");

// @route     POST /postMessage
// Adds message to the message Table in the DB with the sent time of the message, user and group.
router.post('/postMessage', (req, res) => {
    //get userID and groupID from user and group tables
    //Use userId and groupID to get ugId from UserGroup table
    //Add ugId,the message and message sent time into messages table
});

//@route    GET /paginatedMessage
//Get request for all the message of a particular group in paginated manner
router.get('/paginatedMessage', async (req, res) => {
    //Using groupName from the request we can find its groupId from group table
    //Find all the ugId which are of the given groupId
    //Find all the messages of these ugId and display the messages in ascending order of time    
});

module.exports = router;