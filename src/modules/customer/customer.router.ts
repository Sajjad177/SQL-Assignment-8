import express from "express";
import { customerController } from "./customer.controller";

const router = express.Router();

router.post("/", customerController.createNewCustomer);

export const customerRouter = router;
