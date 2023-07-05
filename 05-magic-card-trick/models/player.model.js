const mongoose = require('mongoose');
const db = require('../config/db');

const URI = process.env.MONGODB_URI || db.url;

mongoose.connect(URI);

const PlayerSchema = new mongoose.Schema({
    name: String,
    card: String,
});

module.exports = mongoose.model('Player', PlayerSchema);
