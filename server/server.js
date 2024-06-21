//app configuration
var express=require("express");
var app=express();

//importing modules
var multer=require("multer");
var mongoose=require("mongoose");
require("dotenv").config();

////.....................

//setting configuration
 app.use(express.json());
 app.use(express.urlencoded());
 
 //................

//DataBase configuration

mongoose.connect(process.env.mongo_url)
.then(function(){
    console.log("DataBase Connected sucessfully!!!");
})
.catch(function(err){
    console.log("DataBase connection error!"+err);
})

//......................................


 app.listen(5000,function(err){
    if(err){
        console.log("Error in the Server Running!");
    }
    else{
        console.log("Server is Running sucessully!@");
    }
 })