const express = require('express');
const app = express();

// Wrap for async/await routes middleware
const asyncMiddleware = require('../../utils/wrap');

// Require 
const register = require('./controllers/register')

// Route for check
app.get('/', async(req, res) => {
    res.json("CHECK");
});

// Route for post users
app.post('/users', asyncMiddleware(register));

module.exports = app;