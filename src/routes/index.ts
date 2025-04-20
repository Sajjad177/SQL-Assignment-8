import { Router } from "express";
import { customerRouter } from "../modules/customer/customer.router";
import { bikeRouter } from "../modules/bikes/bike.route";
import { serviceRouter } from "../modules/services/service.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/customers",
    router: customerRouter,
  },
  {
    path: "/bikes",
    router: bikeRouter,
  },
  {
    path: "/services",
    router: serviceRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
