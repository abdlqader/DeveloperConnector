const mongose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDb = async () => {
  try {
    await mongose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("MongoDb Connected...");
  } catch (err) {
    console.error(err.message);
    // to terminate the program
    process.exit(1);
  }
};

module.exports = connectDb;
