var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var signup = require.main.require('./controllers/signup');

var app = express();
app.use(expressSession({ secret: 'super secret', saveUninitialized: true, resave: false }));
var port = process.env.PORT || 3000;


//configuration
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/signup', signup);



app.listen(port, () => {
    console.log('server started on port '+port);
});

