import { Router } from "express";
import { customerRouter } from "../modules/customer/customer.router";
import { bikeRouter } from "../modules/bikes/bike.route";

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
  //   {
  //     path: "/auth",
  //     router: authRouter,
  //   },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
