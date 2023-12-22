const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME || "test"; // Use "test" as a default if not specified


mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      dbName: dbName, // Specify the name of the database
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
