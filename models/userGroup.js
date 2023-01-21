const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    ugId: Number,
    userId: Number,
    groupId: Number
});

module.exports = mongoose.model('UserGroup', postSchema);