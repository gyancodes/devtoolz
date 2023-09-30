import mongoose from "mongoose";
const DevResoucesSchema = new mongoose.Schema({
    name: {type: String, required:true},
    img:{type: String, default:""},
}, {timestamps: true});
mongoose.models = {};
export default mongoose.model('DevResources', DevResoucesSchema);
