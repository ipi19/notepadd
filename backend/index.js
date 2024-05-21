import express from "express";
import mongoose from "mongoose";
import mongodb from "./database/mongodb.js";

const app = express();
mongodb();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from your Express server using ES modules!");
});

app.listen(PORT, () => {
  console.log(`"port started running on port ${PORT}"`);
});
