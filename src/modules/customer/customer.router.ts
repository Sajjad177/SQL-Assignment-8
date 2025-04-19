import express from "express";
import { customerController } from "./customer.controller";
import validateRequest from "../../middlewares/validation";
import { CustomerValidation } from "./customer.validation";

const router = express.Router();

router.post("/", customerController.createNewCustomer);
router.get("/", customerController.getAllCustomers);
router.get("/:customerId", customerController.getSingleCustomer);
router.put(
  "/:customerId",
  validateRequest(CustomerValidation.update),
  customerController.updateCustomer
);

router.delete("/:customerId", customerController.deleteCustomer);

export const customerRouter = router;
