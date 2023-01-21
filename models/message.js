const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    ugId: Number
},
{timestamps: true});

module.exports = mongoose.model('Messages', postSchema);