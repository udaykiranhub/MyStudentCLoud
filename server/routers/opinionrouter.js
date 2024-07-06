var express=require("express");
var router=express.Router();

var opinion=require("../schemas/opinionschema");
const signupschema = require("../schemas/signupschema");

router.post("/sendopinion",async function(req,res){
    
try{


 var find=await opinion.findOne({id:req.body.id})

 if(find){
    var result = await opinion.updateOne(
        { id: req.body.id },
        { $push: { messages: req.body.message } }
      );
      console.log("Opinion data updated successfully!");

      return res.status(200).json({ message:true });
    }
 
 else{
var find=await signupschema.findOne({_id:req.body.id});
console.log("finding data is:"+find)
if(find){
    var {name,image}=find;
}
else{
    return res.status(404).json({message:false})
}
var data=await opinion({messages:req.body.message,id:req.body.id,name:name,profile:image})
data.save()
.then(function(data){
    console.log("opinion Data saved sucessfully!");
    return res.status(200).json({message:true});
})
.catch(function(err){
    console.log("Error in the opinion data!"+err)
 return    res.status(500).json({message:false});
})
 }



}
catch(err){
  
        console.log('Erro in the opinion Router!'+err);
        return    res.status(500).json({message:false})
    }
})

module.exports=router;

console.log("Opinion schema imported!");