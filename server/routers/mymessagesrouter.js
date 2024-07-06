var express=require("express");

var router=express.Router();

var opinions=require("../schemas/opinionschema");

router.post("/mymessages",async function(req,res){
    try{
 var data=await opinions.find({id:req.body.id});
 console.log("messaegs id is:"+req.body.id);
 console.log("messages from mymessages:"+data);

 if(data){
    console.log("dataaaaaa")
    res.status(200).json({message:data})
 }
 else{
    res.status(200).json({messaga:false})
 }

    }
    catch(err){
        console.log("Error in the Mymessages router!"+err);
        res.status(500).json({message:false});
    }
})

module.exports=router;

console.log('Mymessagesrouter Imported!');