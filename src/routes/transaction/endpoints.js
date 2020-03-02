const express = require('express');
const app = express();
const passport = require('passport')

// Wrap for async/await routes middleware
const asyncMiddleware = require('../../utils/wrap');

// Require 
const readAll = require('./controllers/readAll')

// Route for search
app.get('/transactions', passport.authenticate('bearer', { session: false }), asyncMiddleware(readAll));

module.exports = app;