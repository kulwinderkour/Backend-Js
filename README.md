## TODO APP ON STACK BLITZ USING EXPRESS

STEP 1: npm install mongoose
We have to create a todo folder inside models -> TODO (backend application)
and the files inside the todos show the characters of the files which will store the data and how to insert data this will handle by controllers(middle man between user request and buisness logics)


File 1: user.models.js  (using .models is just a good practice no chnage in the js file)
File 2: todos.models.js
File 3: sub_todos.models.js


### user.models.js


step 1: import mongoose from "mongoose"
step 2: mongoose helps to create schema is a method that takes objects 
// const userSchema = new mongoose.schema({},{})


step 3: to export this schema in mongoose we have different method
export const User = mongoose.model("User", Username);  // model(data model) is a method that takes two parameter which models and on what bases 


here the name of the model is "User" but in the next line when it store to database we have to write users (plural and lowercase always)



**** this is just basic structure now we have to pass the data in schema
OPTION 1: BUT THIS IS JUST BASIC LAYOUT BELOW
username:String,
email:String,
isActive:Boolean

OPTION 2: BUT WE CAN ADD MORE OBJECTS OR FEATURES IN THESE ENTITIES
type:String, 
required:true,
unique:true // like the unique usernames in social media platforms


step 4: at last we have to add the time stamps also after those entities 


### sub_todos.models.js
import { Timestamp } from "bson"
import mongoose from "mongoose"

const subtodo = new mongoose.Schema({},{Timestamp:true})

export const subtodo = mongoose.models("subtodo",subtodo)

//// same complete normal code as user.models.js

### todos.models.js


import { Timestamp } from "bson"
import mongoose from "mongoose"

const todo = new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  complete:{
    type:boolean,
    default:false
  },
  createdby:{
    type:mongoose.Schema.Types.ObjectId, 
    ref: "user" 
  },
  Subtodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"subtodo "
    }
  ]
  // array of subtodos

},{Timestamp:true})

export const todo = mongoose.models("todo",todo)



// ONE THING IMPORTANT AND NEW:
how to call the reference from another file so we have to user the type and the ref and in the ref put the export model name we have put earlier and in the type- mongoose.schema.types.objectId
this is the method to put the refernece from another model  