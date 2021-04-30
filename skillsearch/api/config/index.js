require("dotenv").config();
const mongoose = require("mongoose");

const { DB_CONNECTION } = process.env;

//MONGO ATLAS DATA BASE
mongoose
  .connect(`${DB_CONNECTION}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB CONNECT!!"))
  .catch((e) => console.log("DB NO CONNECT ERROR", e));

module.exports = mongoose;
