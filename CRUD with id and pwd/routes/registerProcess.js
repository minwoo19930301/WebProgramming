var express = require('express');
var mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'skku',
  password : 'Rla48684!',
  database : 'skku_db'
});
var router = express.Router();


router.post('/', function(req, res, next) {
    connection.query('SELECT * from login where user_id=\'' + req.body.id + '\'',
         function(err, rows, fields) {
            if (!err) {
                if(rows.length > 0){
                    res.send('<script type="text/javascript">alert("already registered ID");window.location.href = "/register";</script>');
                }
                else{
                    connection.query('INSERT INTO login(user_id, user_pwd, user_name) values(\''+ req.body.id+'\',\''+req.body.password+'\', '+'\'new \')',
                         function(err, rows, fields) {
                        if (!err) {
                            console.log("success");
                        } else {
                            console.log('Error while performing Query.' + err);
                        }
                    res.redirect('/');  // Remenber event based....
                    }
                );
                }
            } else {
                console.log('Error while performing Query.' + err);
            }
        }
    );
    //
    
});

module.exports = router;
/**connection.query('SELECT * from login where user_id=\'' + req.body.id + '\'', function(err, rows, fields) {
        if (!err) {
            if(rows.length == 0) {
                res.redirect('/');
            } 
        } else {
            console.log('Error while performing Query.' + err);
        }
    }); */