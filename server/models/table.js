import mongoose from "mongoose";
const tableschema = new mongoose.Schema({
    tableNumber : {
        type: Number,
        required:true,
        unique: true
    },
    qrCodeUrl:{
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        default: true
    }
})

export default mongoose.model('table', tableschema);