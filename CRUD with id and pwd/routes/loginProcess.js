var express = require('express');
var mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'skku',
  password : 'Rla48684!',
  database : 'skku_db'
});
var router = express.Router();

/* login post */
router.post('/', function(req, res, next) {
    if(req.body.id) { // login id exist
        console.log('reqs login id:' + req.body.id);
        connection.query('SELECT * from login where user_id=\'' + req.body.id + '\''+' and user_pwd=\'' +req.body.password+ '\'',
         function(err, rows, fields) {
            if (!err) {
                if(rows.length > 0) {
                    req.session.logined = true;  // login success session에 저장
                    req.session.uid = rows[0].uid;
                    req.session.login_id = req.body.id;  // login id session에 저장
                    res.redirect('/');  // Remenber event based....
                } else {
                    res.send('<script type="text/javascript">alert("no ID or password is wrong");window.history.back();</script>');
                    //res.send('<script type="text/javascript">alert("no ID or password is wrong");window.location.href = "/login";</script>');
                }
            } else {
                console.log('Error while performing Query.' + err);
                res.redirect('/');  // Remenber event based....
            }
        });
    } else { // login fail
        req.session.destroy();
        res.redirect('/');
    }
});

module.exports = router;
