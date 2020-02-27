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


module.exports = router;