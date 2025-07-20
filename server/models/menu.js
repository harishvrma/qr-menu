import mongoose from "mongoose";
const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    category: String,
    available:{
        type: Boolean,
        default: true
    },
    imageurl: String

});

export default mongoose.model('menu', menuSchema);