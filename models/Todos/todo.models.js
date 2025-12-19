// import mongoose from "mongoose"

// const todo = new mongoose.Schema({
//   content:{
//     type:String,
//     required:true
//   },
//   complete:{
//     type:boolean,
//     default:false
//   },
//   createdby:{
//     type:mongoose.Schema.Types.ObjectId, 
//     ref: "user" 
//   },
//   Subtodos:[
//     {
//       type:mongoose.Schema.Types.ObjectId,
//       ref:"subtodo"
//     },
//   ]
//   // array of subtodos

// },
// {Timestamp:true});

// export const todo = mongoose.model("todo",todo)