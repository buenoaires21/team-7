require("dotenv").config();
const mongoose = require("mongoose");

const { DB_NAME, DB_PASSWORD } = process.env;

//MONGO ATLAS DATA BASE
mongoose
  .connect(
    `mongodb+srv://SkillsSearch:${DB_PASSWORD}@skillssearchdb.soomp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("DB CONNECT!!"))
  .catch((e) => console.log("DB NO CONNECT ERROR", e));

module.exports = mongoose;
