var express=require("express");
var router=express.Router();
var signupschema=require("../schemas/signupschema");
router.post("/cookie",async function(req,res){
    try{

        console.log("body is:"+req.body.id);
var data=await signupschema.findById(req.body.id);
if(data){
    console.log("Cookies data finding!"+data);
    res.status(200).json({data:data});
}
else{
    res.status(200).json({message:false});
}
    }
    catch(err){
        console.log("Error in the CookieRouter!"+err);
        res.status(500).json({message:false});
    }
})

module.exports=router;
console.log("Cookie Router is imported!");