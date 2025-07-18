require('dotenv').config();

const settings = {
    PORT:process.env.PORT,
    DB_PASS:process.env.DB_PASS,
    DB_NAME:process.env.DB_NAME,
    SECRET:process.env.SECRET
};

module.exports = settings