const mongoose = require("mongoose");

// Define a schema its a structure we want in a database
const userScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create a model so we can interact with our database collection with model and access methods

const userModel = mongoose.model("User", userScheme, "users");

module.exports = userModel;
