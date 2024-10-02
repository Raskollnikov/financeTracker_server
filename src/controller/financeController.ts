import { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const getAllByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordModel.find({ userId: userId });

    if (records.length === 0) {
      res.status(404).send("No records found from the User");
    }

    res.status(200).send(records);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addRecords = async (req: Request, res: Response) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new FinancialRecordModel(newRecordBody);
    const savedRecord = await newRecord.save();

    res.status(200).send(savedRecord);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateRecord = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await FinancialRecordModel.findByIdAndUpdate(
      id,
      newRecordBody,
      { new: true }
    );

    if (!record) {
      res.status(404).send(record);
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteRecord = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deleteRecord = await FinancialRecordModel.findByIdAndDelete(id);

    if (!deleteRecord) {
      res.status(404).send("no record found");
    }
    res.status(200).send(deleteRecord);
  } catch (error) {
    res.status(500).send(error);
  }
};
export { getAllByUser, addRecords, updateRecord, deleteRecord };
