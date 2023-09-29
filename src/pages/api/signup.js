var CryptoJs = require('crypto-js');
const nodemailer = require("nodemailer");
import User from '../../../models/User';
import connectDb from '../middleware/mongoose';
const handler = async (req, res) => {
    if(req.method=="POST"){
        const transporter = await nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
              user: 'basirkhan4ukhanatoz@gmail.com',
              pass: 'O1aXMRNItUmjprkD'
            }
          });
        console.log(req.body)
    let eUser= await User.find({email:req.body.email});
    let pUser=await User.find({phone:req.body.phone});
    if(eUser.length>0){
        res.status(400).json({success:false,message:"An user with This email already exists"});
    }
    else if(pUser.length>0){
        res.status(400).json({success:false,message:"An user with This phone already exists"});
    }
    else{
        let newuser=new User({
            name:req.body.name,
            email:req.body.email,
            password:CryptoJs.AES.encrypt(req.body.password, process.env.AES_SECRET).toString(),
            phone:req.body.phone,
        })
        let save = await newuser.save();
        const info = await transporter.sendMail({
            from: '<support@Devtoolz.com>', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: "🎉 Welcome to DevToolz! Your Account Has Been Created Successfully! 🚀", // Subject line
            text: "Account Creation", // plain text body
            html: `
            <h1> Welcome To Devtoolz Your Welcome for Devtoolz</h1>
            `, 
          });
        res.status(200).json({success:true,message:"User account created successfully",id:save._id})
    }
    }
    else{
        res.status(400).json({success:false,message:"This Method is not allowed"})
    }
}
export default connectDb(handler);