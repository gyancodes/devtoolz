
import connectDb from "../middleware/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
  if(req.method=="POST"){
    console.log(req.body);
let a = await User.findOne({email:req.body.email});
if(a){
    res.status(200).json({success:true,message:"User found",data:a})
}
else{
    res.status(400).json({success:false,message:"User not found"})
}
  }
  else{
    res.status(400).json({success:false,message:"Invalid Request"})
  }
}
export default connectDb(handler);
