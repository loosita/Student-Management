const {Client} = require('pg');
const {DB_NAME,DB_PASS} = require('../utils/config')

const client = new Client({
    database : DB_NAME,
    hostname:'localhost',
    port:5432,
    username:'postgres',
    password:DB_PASS
});

module.exports = client;