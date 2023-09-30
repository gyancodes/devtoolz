import mongoose from "mongoose";
const DevToolSchema = new mongoose.Schema({
    name: {type: String, required:true},
    img:{type: String, default:""},
}, {timestamps: true});
mongoose.models = {};
export default mongoose.model('DevTool', DevToolSchema);