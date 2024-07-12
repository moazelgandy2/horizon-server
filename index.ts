import express, { Request, Response } from "express";
import cors from "cors";

import { db } from "./lib/db";
const app = express();
const port = 3000;

app.use(cors());

app.get("/transactions", async (req: Request, res: Response) => {
  const transactions = await db.transactions.findMany();
  res.json(transactions);
});

app.get("/customers", async (req: Request, res: Response) => {
  const customers = await db.customers.findMany();
  res.json(customers);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
