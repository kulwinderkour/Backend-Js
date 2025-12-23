// import mongoose from "mongoose"

// const orderitemSchema = new mongoose.schema({
//   productid:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"product"
//   },
//   quantity:{
//     type:Number,
//     required:true
//   }
// })
// const orderSchema = new mongoose.Schema({
//   orderprice:{
//     type:Number,
//     required:true
//   },
//   customer:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User"
//   },
//   ordertimes:{
//     type:[orderitemSchema],

//   },
//   status:{
//     type:String,
//     enum:["PENDING","CANCELLED","DELIVERED"],   // ENUM ARE THE CHOICES
//     default:"PENDING",
//   }

// },{timestamps:true})

// export const order = mongoose.model("order",orderSchema)