const mongoose = require("mongoose");
const { Schema } = mongoose;

var cardSchema = new Schema({
  userId: String,
  username: String,

  city_name: String,

  card_name: String,
  moneySpent: Number,
  day: Number,
});

mongoose.model("card", cardSchema);
