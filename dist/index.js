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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./lib/db");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.get("/transactions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = yield db_1.db.transactions.findMany();
    res.json(transactions);
}));
app.get("/customers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield db_1.db.customers.findMany();
    res.json(customers);
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
