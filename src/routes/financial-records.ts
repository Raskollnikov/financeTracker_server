import express from "express";
import {
  getAllByUser,
  addRecords,
  updateRecord,
  deleteRecord,
} from "../controller/financeController";

const router = express.Router();

router.get("/getAllByUserID/:userId", getAllByUser);
router.post("/", addRecords);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);
export default router;
