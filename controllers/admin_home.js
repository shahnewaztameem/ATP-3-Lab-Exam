var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

//ROUTES
router.get('*', function(req, res, next) {
    if (req.session.u_id != null) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/', (req, res) => {
    userModel.get(req.session.u_id, (result) => {
        var data = { user_info: result };
        res.render('admin/index', data);
    });
});
router.get('/user_list', (req, res) => {

    userModel.getAll(function(results) {
        var data = {
            admin_id: req.session.u_id,
            uList: results
        };
        res.render('admin/user_list', data);
    });
});

router.get("/delete/:id", function(req, res) {

    userModel.delete(req.params.id, function(status) {
        res.redirect('/home-admin/user_list');
    });
});


router.get('/admin-edit_account', (req, res) => {
    userModel.get(req.session.u_id, (result_info) => {
        if (result_info.user_id != null) {
            var data = {
                user_info: result_info,
                errors: req.session.errors
            };
            res.render('admin/edit_profile', data);
        } else { res.redirect('/home-admin') }
    });
});


router.post('/admin-edit_account', (req, res) => {
    var update_user = {
        name: req.body.name,
        u_email: req.body.u_email,
        user_type: req.body.user_type,
        relationship_status: req.body.relationship_status,
        u_pass: req.body.u_pass,
        u_location: req.body.u_location,
        u_gender: req.body.u_gender,
        u_birthday: req.body.u_birthday,
        user_id: req.session.u_id
    };

    //update user_info table information
    userModel.update(update_user, (user_update_status) => {
        if (user_update_status) {
            res.redirect('/home-admin');
        } else {
            res.redirect('/home-admin/admin-edit_account');
        }
    });
});
module.exports = router;