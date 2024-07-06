var express=require("express");
var router=express.Router();
var opinions=require("../schemas/opinionschema");

var signupschema=require("../schemas/signupschema");
router.get("/getopinions",async function(req,res){
    try{

var data=await opinions.find();
res.status(200).json({message:data});

    }
    catch(err){
        console.log('Error in the getopinions roputer!'+err);
        res.status(500).json({message:false});
    }
})
module.exports=router;