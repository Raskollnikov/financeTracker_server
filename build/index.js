"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const financial_records_1 = __importDefault(require("./routes/financial-records"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/financial-record", financial_records_1.default);
const mongoURI = process.env.MONGO_URI;
mongoose_1.default
    .connect(mongoURI)
    .then(() => console.log("connected"))
    .catch((err) => console.error("Failed to connect to mongo db", err));
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
