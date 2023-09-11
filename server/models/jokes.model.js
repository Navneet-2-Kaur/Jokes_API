
// 1 import mongoose
const mongoose = require("mongoose");

// 2 Define the schema with keys + validations 

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup for joke is required"]
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required"]
  },
},
{ timestamps: true } // This automatically gives us the createdAt and updatedAt
);


// 3 Create a model with the schema and export it 
const joke = mongoose.model("joke", JokeSchema);

module.exports = joke;
