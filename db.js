const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'bloggingapp',
  user: 'root',
  password: '20042707',
  database: 'blog_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
