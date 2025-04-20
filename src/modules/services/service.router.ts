import express from "express";
import { ServiceController } from "./service.controller";

const router = express.Router();

router.post("/", ServiceController.createService);
router.get("/", ServiceController.getAllServices);
router.get("/status", ServiceController.getAllOverdueServices);

router.get("/:serviceId", ServiceController.getSingleService);


router.put("/:serviceId", ServiceController.updateService);




export const serviceRouter = router;
