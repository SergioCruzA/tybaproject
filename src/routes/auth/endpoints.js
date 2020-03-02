const express = require('express');
const app = express();

// Wrap for async/await routes middleware
const asyncMiddleware = require('../../utils/wrap');

// Require 
const login = require('./controllers/login')
const logout = require('./controllers/logout')

// Route for auth
app.post('/login', asyncMiddleware(login));
app.get('/logout', asyncMiddleware(logout));

module.exports = app;