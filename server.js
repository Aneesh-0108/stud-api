

require("dotenv").config()



const express = require("express")
const mongoose = require("mongoose")

const Student = require("./models/Student")
//
const studentRoute = require("./src/routes/studentRoutes");

const app = express()

app.use(express.json())

////
app.use("/students",studentRoute)

app.get("/",(req,res)=>{
    res.send("API is working");
})



//Create Student(POST)

// app.post("/students", async(req,res)=>{
//     try{
//         const student = new Student(req.body)

        

//         await student.save()
//         res.status(201).json(student)

//     }
//     catch(err){
//         res.status(400).json({error: err.message})
//     }
// })

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Atlas Connected")

    app.listen(process.env.PORT, "0.0.0.0", ()=>{
    console.log(`Server runnning on port ${process.env.PORT}`)
});

})
.catch(err => console.log(err))

// app.get("/students",async(req,res)=>{
//     try{
//         const students = await Student.find()
//         res.json(students)

//     }
//     catch(err){
//         res.status(400).json({error: err.message})
//     }
  

// })


// app.get("/students/:id",async(req,res)=>{
//     try{
//         const student = await Student.findById(req.params.id)
//         if(!student){
//             return res.status(404).json({
//                 error: "Student not found!"
//             });
//         }
//         res.json(student);
//     }
//     catch(err){
//         res.status(500).json({
//             error: err.message
//         })
//     }
    

    

// })

// app.put("/students/:id",async(req,res)=>{

//     try{
//         const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})

//         if(!student){
//             return res.status(404).json({
//                 error: "Student not found!"
//             })
//         }
//         res.json(student)
    
//     }
//     catch(err){
//         res.status(500).json({
//             error: err.message
//         });
//     }

// })

// 

// app.delete("/students/:id",async(req,res)=>{

//     try{
//         const studentt = await Student.findByIdAndDelete(req.params.id)

//         if(!student){
//             return res.json({error:"Student not found!"})
//         }
//         res.json({message: "Studnet deleted!"})

//     }
//     catch(err){
//         res.status(500).json({
//             error: err.message
//         })
//     }

// })







