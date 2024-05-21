import express from "express";
import cors from "cors";
import mongodb from "./database/mongodb.js";
import bodyParser from "body-parser";
import notesRouter from "./routes/notesRouter.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongodb();

const PORT = process.env.PORT || 5000;

app.use("api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`"port started running on port ${PORT}"`);
});
