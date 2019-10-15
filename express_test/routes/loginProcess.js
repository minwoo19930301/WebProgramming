var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function(req, res, next) {
//  res.send('id = ' + req.body.id  + ', password = ' + req.body.password);
    if(req.body.id =="123456"){
        req.session.logined = true;
        req.session.login_id = req.body.id;
    }else{
        req.session.destroy();
    }
    res.redirect('/')
});

module.exports = router;
