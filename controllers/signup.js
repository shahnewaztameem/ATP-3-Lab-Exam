var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    var title = "Registration Page";
    res.render('signup/index', {title: title});
});

module.exports = router;