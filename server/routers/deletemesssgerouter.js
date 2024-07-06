var express=require("express");

var router=express.Router();

var opinions=require("../schemas/opinionschema")

router.delete("/deletemessage",async function(req,res){
    try{
console.log("id is:"+req.body.id+"and message is:"+req.body.message);
const result = await opinions.findOneAndUpdate({ id: req.body.id }, { $pull: { messages: req.body.message } } );
console.log("deleted message is:"+result)
res.status(200).json({message:true});
    }
    catch(err){
res.status(500).json({message:false});
        console.log("Erro in the delete message router!"+err);
    }})

    module.exports=router;
    console.log("deltemessage roputer imported!");