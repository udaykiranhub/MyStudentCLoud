var mongoose=require("mongoose");

var schema=mongoose.Schema({
    id:{
        type:String
    },
    messages:{
        type:Array
    }
})

module.exports=mongoose.model("opinion",schema);
console.log("Opinion schema imported!");