import mongoose from "mongoose";
const RecruiterSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true,unique:true},
    password: {type: String, required:true},
    img:{type: String, default:""},
    phone: {type: String, default:""},
    status:{type: String, default:"pending"}
}, {timestamps: true});
mongoose.models = {};
export default mongoose.model('Recruiter', RecruiterSchema);