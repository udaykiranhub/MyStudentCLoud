var express=require("express");
var  router=express.Router();

var signupschema=require("../schemas/signupschema");

router.post("/search",async function(req,res){
    try{
var data=await signupschema.find()
res.status(200).json({message:data});
console.log("search data get sucesssfully!");
    }
    catch(err){
        console.log("Error in the search Router method!"+err);
        res.status(500).json({message:false});
    }
})

module.exports=router;
console.log("searchRouter is imported!");