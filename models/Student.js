const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: String,
    id: String,
    course: String,
    email: String
})

module.exports = mongoose.model("Student", studentSchema)