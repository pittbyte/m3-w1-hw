const express = require('express');
const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Static files
app.use(express.static('public'));

// Define a route
app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;
