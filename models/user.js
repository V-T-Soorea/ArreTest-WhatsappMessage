const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: Number,
    username : String,
    phoneNo: Number
});

module.exports = mongoose.model('User', postSchema);