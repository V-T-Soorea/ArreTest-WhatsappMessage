const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    groupId: Number,
    groupname : String
});

module.exports = mongoose.model('Group', postSchema);