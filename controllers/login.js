var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    res.render('login/index');
});

router.post('/', (req, res) => {


        var user = {
            u_email: req.body.u_email,
            u_pass: req.body.u_pass
        };
        userModel.validate(user, function(result) {
            if (result.user_id != null) {
                req.session.u_id = result.user_id;
                req.session.u_type = result.user_type;
                req.session.u_name = result.user_name;
                req.session.u_loc = result.user_location;

                if (req.session.u_type == "Admin") {
                    res.redirect('/home-admin');
                } else
                    res.redirect('/home-member');
            } else {
                req.session.success = "Invalid User";
                res.redirect('/login');
            }
        });
});

module.exports = router;