"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const financeController_1 = require("../controller/financeController");
const router = express_1.default.Router();
router.get("/getAllByUserID/:userId", financeController_1.getAllByUser);
router.post("/", financeController_1.addRecords);
router.put("/:id", financeController_1.updateRecord);
router.delete("/:id", financeController_1.deleteRecord);
exports.default = router;
