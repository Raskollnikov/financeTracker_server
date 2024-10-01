import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = process.env.MONGO_URI as string;
mongoose
  .connect(mongoURI)
  .then(() => console.log("connected"))
  .catch((err) => console.error("Failed to connect to mongo db", err));

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
