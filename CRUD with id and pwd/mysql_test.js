var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'skku',
  password : 'motizen1125',
  database : 'skku_db'
});

connection.connect();

var login_id = '1234567';

connection.query('SELECT * from login where user_id=' + login_id, function(err, rows, fields) {
  if (!err) {
    if(rows.length > 0) {
      console.log("uid : " + rows[0].uid);
    } else {
      
    }
  }
  else
    console.log('Error while performing Query.');
});

connection.end();