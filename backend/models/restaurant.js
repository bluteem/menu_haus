const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  rname: {
    type: String,
    required: true,
  },
  rowner: {
    type: String,
    required: true,
  },
  raddress: {
    type: String,
    required: true,
  },
  rphone: {
    type: String,
    required: true,
  },
  remail: {
    type: String,
    required: true,
  },
});

module.exports = Restaurant = mongoose.model("restaurant", RestaurantSchema);