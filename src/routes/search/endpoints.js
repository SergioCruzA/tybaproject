const express = require('express');
const app = express();
const passport = require('passport')

// Wrap for async/await routes middleware
const asyncMiddleware = require('../../utils/wrap');

// Require 
const search = require('./controllers/search')

// Route for search
app.get('/restaurants', passport.authenticate('bearer', { session: false }), asyncMiddleware(search));

module.exports = app;