import { Router } from "express";
import { customerRouter } from "../modules/customer/customer.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/customers",
    router: customerRouter,
  },
  //   {
  //     path: "/admin",
  //     router: adminRouter,
  //   },
  //   {
  //     path: "/auth",
  //     router: authRouter,
  //   },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
