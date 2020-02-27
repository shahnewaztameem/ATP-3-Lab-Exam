var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    var error ={
        errors: req.session.errors,
        success: req.session.success
    };
    req.session.errors = null;
    req.session.success = null;
    var title = "Registration Page";
    res.render('signup/index', {title: title});
});

router.post('/', function(req, res) {
        var user = {
            name: req.body.f_name + req.body.l_name,
            u_email: req.body.u_email,
            user_type: req.body.user_type,
            relationship_status: req.body.relationship_status,
            u_pass: req.body.u_pass,
            u_location: req.body.u_location,
            u_gender: req.body.u_gender,
            u_birthday: req.body.u_birthday
        };
        req.session.errors = null;
        console.log(user);
        userModel.insert(user, function(results) {
            if (results) {
                req.session.success = 'Successfully sign up...Good to go!!';
                res.redirect('/signup');
            } else {
                req.session.success = 'Probelm with signup..try again'
                res.redirect('/signup');
            }
        });
});

module.exports = router;