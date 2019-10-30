var express = require('express');
var mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'skku',
  password : 'Rla48684!',
  database : 'skku_db'
});
var router = express.Router();

router.get('/', function(req, res, next) {
    connection.query('DELETE FROM login where uid=' + req.session.uid, function(err, rows, fields) {
        console.log("deleted");
    })
    req.session.destroy();
    res.redirect('/');  // Remenber event based....
  });


  
module.exports = router;
