"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecord = exports.updateRecord = exports.addRecords = exports.getAllByUser = void 0;
const financial_record_1 = __importDefault(require("../schema/financial-record"));
const getAllByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const records = yield financial_record_1.default.find({ userId: userId });
        if (records.length === 0) {
            res.status(404).send("No records found from the User");
        }
        res.status(200).send(records);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllByUser = getAllByUser;
const addRecords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRecordBody = req.body;
        const newRecord = new financial_record_1.default(newRecordBody);
        const savedRecord = yield newRecord.save();
        res.status(200).send(savedRecord);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addRecords = addRecords;
const updateRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = yield financial_record_1.default.findByIdAndUpdate(id, newRecordBody, { new: true });
        if (!record) {
            res.status(404).send(record);
        }
        res.status(200).send(record);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.updateRecord = updateRecord;
const deleteRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteRecord = yield financial_record_1.default.findByIdAndDelete(id);
        if (!deleteRecord) {
            res.status(404).send("no record found");
        }
        res.status(200).send(deleteRecord);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteRecord = deleteRecord;
