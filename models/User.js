import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    Fname: {type: String, required:true},
    Lname: {type: String, required:true},
    company: {type: String, default:""},
    username: {type: String,unique:true},
    protfollio: {type: String, default:""},
    email: {type: String, required:true,unique:true},
    password: {type: String, required:true},
    img:{type: String, default:""},
    phone: {type: String, default:""}
}, {timestamps: true});
mongoose.models = {};
export default mongoose.model('User', UserSchema);