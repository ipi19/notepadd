import express from "express";
import cors from "cors";
import mongodb from "./database/mongodb.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongodb();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from your Express server using ES modules!");
});

app.listen(PORT, () => {
  console.log(`"port started running on port ${PORT}"`);
});
