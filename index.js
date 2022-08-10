const express = require("express");
const mongoose = require("mongoose");
const exphbs =require('express-handlebars')

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create ( {
 defaultLayout:'main',
 extname: 'hbs'
})

app.engine ('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set ('views', 'views')

async function start() {
  try {
    await mongoose.connect(
      // Added spa to the uri you copied from mongodb atlas, ref link: https://forum.freecodecamp.org/t/mongoerror-database-name-must-be-a-string/509789
      "mongodb+srv://root:admin@cluster0.ywk81cv.mongodb.net/spa?retryWrites=true&w=majority",
      {
        useNewUrlParser: true, 
        useFindAndModify: false
      }
    );

    app.listen(PORT, () => {
      console.log("Server has been started...");
    });
  } catch (e) {
    console.log(e);
  }
}

start();



