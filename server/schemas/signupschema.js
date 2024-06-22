var mongoose=require("mongoose");
var schema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
      
    },
    password:{
        type:String
     
    },
    image:{
        type:String
       
    },
    exp:{
        type:String
    },
    bio:{
        type:String
    },
    skill:{
        type:String
    },
    address:{
        type:String
    },
    dob:{
        type:Date
    }
})

module.exports=mongoose.model("signup",schema);
console.log("singup schema imported!");