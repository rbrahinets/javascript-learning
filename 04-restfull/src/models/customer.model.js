const mongoose = require('mongoose');
const db = require('../../config/db');

mongoose.connect(db.url);

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model('Customer', CustomerSchema);
