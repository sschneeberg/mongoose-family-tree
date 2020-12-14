const mongoose = require('mongoose');

//create schema:
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    age: Number,
    website: String
});

//create model, note: model names are singular
const user = mongoose.model('user', userSchema);

module.exports = user;
