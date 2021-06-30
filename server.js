require('dotenv').config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//! require("./seeders/seed"); // Either npm run seed or keep this in here uncommented and it will run the seed

const PORT = process.env.PORT || 3005;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://andrea:Adb12.09.82@cluster0.8f3ol.mongodb.net/workout?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//require(apiRoute)(app);
require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
