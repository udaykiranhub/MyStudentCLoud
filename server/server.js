//app configuration
var express=require("express");
var app=express();

//importing modules
var multer=require("multer");
var mongoose=require("mongoose");
require("dotenv").config();

var cors=require("cors");

////.....................
//Routers.........
const signup=require("./routers/signuprouter.js");

const login=require("./routers/loginrouter.js");

const logout=require("./routers/logoutrouter.js");

const changeProfile=require("./routers/changeprofilerouter.js");

const Edit=require("./routers/accounteditrouter.js");

const users=require("./routers/allusersrouter.js");

var cookie=require("./routers/cookierouter.js")

var search=require("./routers/searchskillrouter.js");

var opinion=require("./routers/opinionrouter.js");
//.....................
//setting configuration
 app.use(express.json());
 app.use(express.urlencoded());
 
 
var corsOptions = {
    origin:["http://localhost:3000","https://mystudentcloud.onrender.com"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(cors(corsOptions));
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

//Using Routers..........

app.use("/",signup);
app.use("/",login);
app.use("/",logout);
app.use("/",Edit);

app.use("/",changeProfile);

app.use("/",users);

app.use("/",cookie);

app.use("/",search);
app.use("/",opinion);
//.................

 app.listen(5000,function(err){
    if(err){
        console.log("Error in the Server Running!");
    }
    else{
        console.log("Server is Running sucessully!@");
    }
 })
