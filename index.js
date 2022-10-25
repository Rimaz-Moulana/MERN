const express = require("express");
const mongoose = require("mongoose");
const app = express();

const CourseModel = require("./models/courses");

app.use(express.json());

mongoose.connect(
    "mongodb+srv://hari:%40Hari0712@crud.9w7qcbl.mongodb.net/courses?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.get("/", async(req, res) =>{
    const course = new CourseModel({courseId: "SCS 2208", courseName: "RAD", courseCredit: 3 });

    try{
        await course.save();
        res.send("inserted data");
    }catch(err){
        console.log(err);
    }
    
});

app.listen(3001, () =>{
    console.log("Server running on port 3001..");
});