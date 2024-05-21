import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  tiltle: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: { type: Date, default: Date.now },
});
