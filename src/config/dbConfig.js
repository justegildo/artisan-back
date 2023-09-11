const { Client } = require('pg');
 
const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'db_artisan',
  password: 'Juste@gildo23',
  port: 5438
});

db.connect();

module.exports = db;