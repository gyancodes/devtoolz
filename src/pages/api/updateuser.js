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
    let eUser= await User.find({username:req.body.email});
    if(eUser.length>0){
        res.status(400).json({success:false,message:"An user with This username already exists"});
    }
    else{
       
        let a = await User.findOneAndUpdate({email:req.body.email},{username:req.body.username,
            phone:req.body.phone,
            company:req.body.company,
            protfollio:req.body.protfollio,
            img:req.body.img,
            Fname:req.body.Fname,
            Lname:req.body.Lname,
            email:req.body.email,
            
           });
           res.status(200).json({success:true,message:"User account updated successfully"})
        const info = await transporter.sendMail({
            from: '<support@devtoolz.com>', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: "🎉 Welcome to DevToolz! Your Account Has Been Updated Successfully! 🚀", // Subject line
            text: "Account Creation", // plain text body
            html: `
            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#f4f4f4">
            <tr>
                <td style="padding: 20px 0;">
                    <table align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);">
                        <tr>
                            <td style="padding: 40px 20px; text-align: center;">
                                <img src="https://res.cloudinary.com/dawzncoau/image/upload/v1696055102/Devtoolz_whitebgformail_ezx5jg.png" alt="Devtoolz Logo" width="150">
                                <h1 style="font-size: 24px; margin-top: 30px; color: #333;">Welcome DevToolz</h1>
                                <p style="font-size: 16px; color: #666; margin-top: 20px;">You have successfully created your account on DevToolz.</p>
                                <p style="font-size: 16px; color: #666;">Our tools and resources enable lightning-fast web application and app development, accelerating your experience and streamlining the coding process for improved outcomes.</p>
                                <a href="https://${process.env.NEXT_PUBLIC_HOST}/login?user=true" style="display: inline-block; margin-top: 30px; padding: 15px 30px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px;">Login to Devtoolz</a>
                                <p style="font-size: 14px; color: #999; margin-top: 20px;">If you have any questions or need assistance, feel free to contact our support team at <a href="mailto:support@devtoolz.com" style="color: #007bff;">support@devtoolz.com</a>.</p>
                                <p style="font-size: 14px; color: #999;">Thank you for choosing DevToolz!</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
            `, 
          });
        res.status(200).json({success:true,message:"User account created successfully"})
    }
    }
    else{
        res.status(400).json({success:false,message:"This Method is not allowed"})
    }
}
export default connectDb(handler);