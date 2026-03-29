//
const express = require("express")
//
const router = express.Router();

//DB Model
const Student = require("../../models/Student")

const { studentValidation,validate} = require("../../middleware/validate");

// CREATE//
router.post("/",studentValidation,validate,async(req,res)=>{
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);

    }
    catch(err){
        res.status(400).json({error:err.message});
    }

});

module.exports = router