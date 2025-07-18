const { client } = require('../db/db');
const { Pool } = require('pg');
const pool = new Pool(client);

const createCourses = async (req,res) => {
    try{
        const query_line = req.body.course_name;
        await pool.query(query_line);
        res.status(201).json({message:"course added successfylly"});
    }catch(err){
        console.log(err.message);
        res.status(500).json({message:"something went wrong"});
    }
}

const getAllCourses = async (req,res) => {
    try{
        const result = await pool.query(`SELECT course_name FROM courses`);
        res.status(200).json(result.row);
    }catch(err){
        console.log(err.message);
        res.status(500).json({message:"something went wrong"});
    }
};

module_exports = {createCourses,getAllCourses};
