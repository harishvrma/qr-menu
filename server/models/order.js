import mongoose from "mongoose";
import menu from "./menu.js";
const orderschema = new mongoose.Schema({
    tableNumber : {
        type: Number,
        required:true,
        unique: true
    },
    items:[
        {
            menuitem:{
                type : mongoose.Schema.Types.ObjectId,
                ref:'menu'
            },
            quantity:{
                type:Number,
                required: true
            }
        }
    ],
    status:{
        type:String,
        enum:['Pending', 'Preparing', 'Ready', 'Completed'],
        default:'Pending'
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('order', orderschema);