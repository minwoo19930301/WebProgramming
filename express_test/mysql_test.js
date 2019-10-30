var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'skku',
    password : 'Rla48684!',
    database : 'skku_db'
});
connection.connect();
connection.query('SELECT * from login', function(err, rows, fields) {
if (!err)
    console.log('The DATA is: ', rows);
else
    console.log('Error while performing Query.');
});
connection.end();