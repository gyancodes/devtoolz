
import connectDb from "../middleware/mongoose";
import DevResources from "../../../models/DevResources";
const handler = async (req, res) => {
  if(req.method=="POST"){
    if(req.body.task=="save"){
    
    try{
        let a = new DevResources({
            name:req.body.name,
            img:req.body.img
        })
        await a.save();
        res.status(200).json({ success: true,message:"Category added successfully"});
    }
    catch(err){
        res.status(200).json({ success: false,message:"Something went wrong please try again later. Internal server error"});
    }

  }
  else{
    let a = await DevResources.find();
    res.status(200).json({ success: true,data:a});
}
    
}

  else{
    res.status(400).json({ message: "This method is not allowed" ,success:false});
}
}
export default connectDb(handler);