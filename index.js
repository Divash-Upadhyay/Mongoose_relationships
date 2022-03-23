const express = require('express');
const mongoose = require('mongoose');

const app =  express();


const connect = () =>{
    return mongoose.connect("");
}; 

const sectionSchema = new mongoose.Schema(
    {
        id:{type:Number, required:true},

    },
    {
        versionKey: false,
        timestamps:true,
    },
  );

  const Section= mongoose.model("section", sectionSchema);

  const booksSchema = new mongoose.Schema(
    {
        id:{type:Number, required:true},
        name:{type:String,required:true},
        body:{type:String, required:true},
    },
    {
        versionKey: false,
        timestamps:true,
    },
  );

  const Books= mongoose.model("book", booksSchema);


  const authorSchema = new mongoose.Schema(
    {
        id:{type:Number, required:true},
        first_name:{type:String,required:true},
        last_name:{type:String, required:true},
    },
    {
        versionKey: false,
        timestamps:true,
    },
  );

  const Author= mongoose.model("author", authorSchema);

  



app.listen(2346, async () => {
    try {
      await connect();
      console.log("running on port 2346");
    } catch {
      console.log(e.message);
    }
  });