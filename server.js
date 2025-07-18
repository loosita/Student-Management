const database = require('./db/db');
const dbTables = require('./db/createTables')
const {PORT} = require('./utils/config');
const studentRouter = require('./routes/students')
const express = require('express');
const app = express();
app.use(express.json());
app.use('/student',studentRouter);

const server = async ()=>{
    try{
        await database.connect();
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }catch(err){
        console.log("couldn't connect to DB")
    }
}  
server()