const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Spend schema
const spend = new Schema({
    username: { type: String, required: true },
    expense: { type: Number, required: true },
    category: { type: String, required: true },
    discription: { type: String, required: false },
    createdDate: { type: Date, default: Date.now }
});

spend.set('toJSON');

module.exports = mongoose.model('Spend', spend);