const express=require("express")
const router=express.Router()
const signupschema=require("../schemas/signupschema.js");
router.post("/login",async (req,res)=>{
    
    try{

console.log("body data is:", req.body);
let {email,password}=await req.body;
console.log("email is:"+email);
let data=await signupschema.findOne({email:email,password:password});

console.log("login data is:",data);
if(data){
    res.status(200).json({message:true,data:data});
}
else{
    res.status(200).json({message:false});
}

    }
    catch(err){
        console.log("Error in the login method!"+err);
        res.status(500).json({message:false});
    }

})
module.exports=router;