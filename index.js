const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/familyTree');
const db = mongoose.connection;

const user = require('./models/user');

db.once('open', () => {
    console.log(`MongoDB on ${db.host}: ${db.port}`);
});

db.on('error', (err) => {
    console.log(`Database error: ${err}`);
});

app.get('/', (req, res) => {
    res.send('Mongoose');
});

app.get('/user', (req, res) => {
    //create user
    user.create({
        name: 'Simone',
        email: 'email',
        age: 23,
        website: 'https://github.com/sschneeberg'
    });
    res.send('create');
});

app.listen(3000, () => {
    console.log('starting on 3000');
});
