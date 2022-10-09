const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://amit:amit@cluster0.tafxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useUnifiedTopology: true
  },
  (err) => {
    console.log("db conected");
  }
);
mongoose.set("useCreateIndex", true);

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.json());

const entriesRouter = require("./routes/entry");

app.use("/", entriesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  console.log("server started");
});
