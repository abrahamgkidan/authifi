const mongoose = require("mongoose");
const { URI } = require("../config").db;

function startDB() {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  mongoose.connection.on("open", () => {
    console.log("CONNECTED TO DB.");
  });
  mongoose.connection.on("error", (e) => {
    console.log("ERROR CONNECTINING TO DB. ", String(e));
  });
  mongoose.connection.on("close", () => {
    console.log("CONNECTION TO DB CLOSED.");
  });
}

module.exports = {
  startDB,
};
