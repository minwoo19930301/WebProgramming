var express = require('express');
var mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'skku',
  password : 'Rla48684!',
  database : 'skku_db'
});
var router = express.Router();

/* GET modify page. */
router.get('/', function(req, res, next) {
    if(req.query.uid)
        res.render('modify', { title: 'Modify', uid: req.query.uid, login_id: req.session.login_id });
    else
    res.redirect('/');
});

router.post('/update', function(req, res, next) {
    if(req.body.id) { // login id exist
        console.log('req uid:' + req.body.uid);
        connection.query('UPDATE login SET ' +
                            'user_id=\'' + req.body.id + '\', ' + 
                            'user_pwd=\''+req.body.password+'\' ' + 
                            'where uid='+req.body.uid, function(err, rows, fields) {
            if (!err) {
                req.session.logined = true;  // login success session에 저장
                req.session.login_id = req.body.id;  // login id session에 저장
            } else {
                console.log('Error while performing Query.' + err);
            }
            res.redirect('/');  // Remenber event based....
        });
    } else { // login fail
        req.session.destroy();
        res.redirect('/');
    }
});
  
module.exports = router;
