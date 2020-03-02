const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport')
const { Strategy: BearerStrategy } = require('passport-http-bearer')

const { verifyToken } = require('./utils/jsonwebtoken')
const { User } = require('./models')

// Create express instance
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// Parse application/json
app.use(bodyParser.json())

// Use middleware for auth routes
app.use(require('./routes/auth'));
// Use middleware for users routes
app.use(require('./routes/user'));
// Use middleware for search routes
app.use(require('./routes/search'));

passport.use(new BearerStrategy(async (token, done) => {
    const verifiedToken = verifyToken(token)
    if (!verifiedToken) { return done(null, false) }
    const { id, username, email } = verifiedToken
    const queryFind = {
        $or: [{ username }, { email }],
      };
    const user = await User.findOne(queryFind, { _id: 1, username: 1, email: 1 });
    if (!user) { return done(null, false); }
    return done(null, user, { scope: 'all' });
}));


// Create mongo conection
// TODO: change url according with env
mongoose.connect('mongodb://prisma:prisma@localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, resp) => {
    if (err) throw err;
    console.log('Data base ONLINE');
});

// Listen port for the server
// app.listen(process.env.PORT, ()=> console.log(`Escuchando por el puerto ${process.env.PORT}`));
app.listen(3000, ()=> console.log(`Escuchando por el puerto ${3000}`));


// Handling error
app.use((err, req, res, next) => {
    res.status(400).json({
        err: err.message,
    })
});