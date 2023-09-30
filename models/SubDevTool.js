import mongoose from "mongoose";
const SubDevToolSchema = new mongoose.Schema({
    name: {type: String, required:true},
    category: {type: String, required:true},
    link:{type: String, required:true},
    img:{type: String, default:""}
}, {timestamps: true});
mongoose.models = {};
export default mongoose.model('SubDevTool', SubDevToolSchema);
