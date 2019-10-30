var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'skku',
    password : 'Rla48684!',
    database : 'skku_db'
});
/* POST users listing. */
router.post('/', function(req, res, next) {
//  res.send('id = ' + req.body.id  + ', password = ' + req.body.password);
    connection.connect();
    //'SELECT * from login where user_id='(the id name)'
    connection.query('SELECT * from login where user_id=\'' +req.body.login_id + '\'', function(err, rows, fields) {
    if (!err){
        if(rows.length>0){
            req.session.logined = true;
            req.session.login_id = req.body.id;

        }
    console.log("in");
    }
    else{
        console.log('Error while performing Query.');
    }
    res.redirect('/')
    });
    connect.log('ended!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    connection.end();
//    if(req.body.id == ){
//        req.session.logined = true;
//        req.session.login_id = req.body.id;
//    }else{
//        req.session.destroy();
//    }
    
});

module.exports = router;
