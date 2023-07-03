import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    addedBy: {
        type: mongoose.Types.ObjectId,
        ref:'user'
    },
},{timestamps:true})

export const NoteModel=mongoose.model('note',noteSchema);
