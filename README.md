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





## ECOMMERCE SAME AS TODOS IN MODELS


**** step1: create 4 files
1. user.models.js
2.products.models.js
3. category.models.js
4.order.models.js


### user.models.js
1st add the boiler plate of three line import, createschema and export
then add 3 in schemas username,email and password

### category.models.js
same boiler plate and then insert the "name" of category in the schema

### products.models.js
same boiler plate next based on how we want our product
1. description of the product
2. name of the product
3. productImage - type:string
4. price - type:Number, default:0
5.stock
6. catgory(taking refernce from catgory.models.js) using type:mongoose.Schema.Types.ObjectId
7. owner - taking refernce from user

### order.models.js
1. orderprice
2. customer - user
3. ordertimes - so we dont the times of order we have 2 method here to create a new schema based on order times  ==>> 1. create a new file of ordertimeSchema and then we can take tehe refernce in the order.models.js.....   2. create a new const ordertimeschema in the smae file only because we hvae to use this not anywhere else (below is the complete code ) containng two Schemas
<!-- ********************** -->

import mongoose from "mongoose"

const orderitemSchema = new mongoose.schema({
  productid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product"
  },
  quantity:{
    type:Number,
    required:true
  }
})
const orderSchema = new mongoose.Schema({
  orderprice:{
    type:Number,
    required:true
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  ordertimes:{
    type:[orderitemSchema],
    
  }

},{timestamps:true})

export const order = mongoose.model("order",orderSchema)


<!-- ***************************  -->


and then add this schema in the ordertime types store in array

<!-- ordertimes:{
    type:[orderitemSchema],
    
  } -->



4. status: type:string, enum:["pending","cancelled","delivered"]  
(enum is the choice and by default it is pending)










 
## HOSPITAL MANAGMENT

1. doctor.models.js
2.patient.models.js
3.hospital.models.js
4.medical_record.models.js




### doctor.model.js

first again create the boiler plate containing the three main fucntions import createSchema and export
then strart adding the schemas
1.name
2.salary
3.qualification
4.workinginanother hospital( now take the reference from the antother file of hospital.models)
5. expereince

### patient.models.js

1.name
2.age
3.gender
4. blood group
5. addmittedIn: (now again take the refernce from hospital)


### hospital.model.js
1.name
2. addressline1
3.addressline2
4. pincode
5. specialized in





<!-- ************************************ -->

THIS IS PURE BACKEND IN MONGOOSE:- MONGOOSE IS THE BRIDGE BETWEEN THE USER AND DATABASE THIS  AND THIS IS THE LIBERARY OF MONGODB AND NODE.JS AND HELPS US TO COMMUNICATE WITH THE MONGODB AND CODE IS PURELY IN JAVASCRIPT OBJECTS
