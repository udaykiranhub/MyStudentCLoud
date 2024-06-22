
var express=require("express");
var router=express.Router();

var signupSchema=require("../schemas/signupschema.js");
router.get("/users",async function(req,res){
    try{
   // var data=[{"name":"uday","id":100},{"name":"kiran","id":101},{"name":"jon","id":102},{"name":"Don","id":103}];
  var data=await signupSchema.find();
  console.log("check data is:",data);
if(data){
    return  res.status(200).json({data:data,message:true});
     
}
else{
    return  res.status(200).json({message:false});
     
}
    }
    catch(err){
     return    res.status(500).send("Error in express"+err);
    }
})
module.exports=router;
console.log("All usersRouter is imported!");