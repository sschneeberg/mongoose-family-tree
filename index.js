const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/familyTree');
const db = mongoose.connection;
db.once('open', () => {
    console.log(`MongoDB on ${db.host}: ${db.port}`);
});

db.on('error', (err) => {
    console.log(`Database error: ${err}`);
});

app.get('/', (req, res) => {
    res.send('Mongoose');
});

app.listen(3000, () => {
    console.log('starting on 3000');
});
