const express=require("express");
const mongoose=require("mongoose");

const router=require("./routes/bookroutes.js");
const cors=require("cors");
const app=express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/books",router);


mongoose.connect("mongodb+srv://user21:Aniket7@cluster0.w8m2xky.mongodb.net/newweb").then(()=> console.log("connected to database")
).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));