const {client} = require('../db/db');
const {Pool} = require('pg');
const bcrypt = require('bcrypt')
const pool = new Pool(client);

const createStudent = async (req,res) => {
    try{
        const hashed_password = await bcrypt.hash(req.body.password,10);
        console.log(req.body.name,hashed_password);
        const query_line = `INSERT INTO students (name,password) VALUES (${req.body.username},${hashed_password})`;
        await pool.query(query_line);
        res.status(201).json({message:"Student created successfully"});
    }catch(err){
        console.log(err.message);
        res.status(500).json({message:"something went wrong"})
    }
}

const getAllStudents = async (req,res) => {
    try{
        const result =pool.query(`SELECT student_name FROM students`);
        res.status(200).json(result.row);
    }catch(err){
        console.log(err.message);
        res.status(500).json({message:"something went wrong"})
    }
}

module.exports = {createStudent,getAllStudents}