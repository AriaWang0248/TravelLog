var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    username: { type: String, default: "" },
    email: {
      type: String,
      required: true,
    },
    password: String,
    description: { type: String, default: "" },
    favprotecards: { type: [mongoose.Schema.ObjectId], default: [] },
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
