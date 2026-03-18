

require("dotenv").config()

const Student = require("./models/Student")

const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("API is working");
})



//Create Student(POST)

app.post("/students", async(req,res)=>{
    try{
        const student = new Student(req.body)

        await student.save()
        res.status(201).json(student)

    }
    catch(err){
        res.status(400).json({error: err.message})
    }
})


app.get("/students",async(req,res)=>{
    const students = await Student.find()
    res.json(students)

})


app.get("/students/:id",async(req,res)=>{
    const student = await Student.findById(req.params.id)

    res.json(student)

})

app.put("/students/:id",async(req,res)=>{

    const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.json(student)

})

app.delete("/students/:id",async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id)

    res.json({message: "Student deleted"})
})



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Atlas Connected")

    app.listen(process.env.PORT, "0.0.0.0", ()=>{
    console.log(`Server runnning on port ${process.env.PORT}`)
});

})
.catch(err => console.log(err))



