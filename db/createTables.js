const { exec } = require('child_process');
const {DB_NAME} = require('../utils/config');

const create = () => {
    exec(`psql -d ${DB_NAME} -f ./db/init.sql`,(error,stdout)=>{
        if(error){
            console.log(error)
        }else{
        console.log("Tables created successfully",stdout)
    };
    })
}

module.exports = create;

