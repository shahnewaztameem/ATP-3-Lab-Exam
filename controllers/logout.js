
var express = require('express');
var router  = express.Router();

router.get('/',(req, res) =>{
 req.session.u_id   = null;
 req.session.u_type = null;
 req.session.u_loc  = null;
 req.session.success  = null;
 res.redirect('/login');
});

module.exports = router;