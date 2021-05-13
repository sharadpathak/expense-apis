const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Earn 
const earn = new Schema({
    username: { type: String, required: true },
    earning: { type: Number, required: true },
    mode: { type: String, required: true },
    discription: { type: String, required: false },
    createdDate: { type: Date, default: Date.now }
});

earn.set('toJSON');

module.exports = mongoose.model('Earn', earn);