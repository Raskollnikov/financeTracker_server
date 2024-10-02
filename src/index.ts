import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import financialRecordRouter from "./routes/financial-records";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/financial-record", financialRecordRouter);
const mongoURI: string = process.env.MONGO_URI as string;
mongoose
  .connect(mongoURI)
  .then(() => console.log("connected"))
  .catch((err) => console.error("Failed to connect to mongo db", err));

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
