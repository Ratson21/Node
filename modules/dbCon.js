var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '104.154.173.130',
  user     : 'root',
  password : 'Fw5hKZv56zSmbrjf',
  database : 'ratsonfebrian'
});

connection.connect((err) =>{
    if (!err) {
        console.log('koneksi db ok');
    } else {
        console.log('koneksi db error');
    }
});

module.exports = connection;
 
