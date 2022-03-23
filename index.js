const express = require('express');
const mongoose = require('mongoose');

const app =  express();

app.use(express.json());

const connect = () =>{
    return mongoose.connect("mongodb+srv://dishu:qwerty123456@evaluation.ubmpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
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
        section_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "section",
            required: true,
          },
          author_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true,
          }],
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

  
// CRUD


  app.post("/book", async (req, res) => {
    try {
      const book = await Books.create(req.body);
  
      return res.send(book);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  app.post("/section", async (req, res) => {
    try {
      const section = await Section.create(req.body);
  
      return res.send(section);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  app.post("/author", async (req, res) => {
    try {
      const author = await Author.create(req.body);
  
      return res.send(author);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


  app.get("/book", async (req, res) => {
    try {
      const book = await Books.find().lean().exec();
  
      return res.send(book);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
 


app.listen(2346, async () => {
    try {
      await connect();
      console.log("running on port 2346");
    } catch {
      console.log(e.message);
    }
  });