import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes";
import globalErrorHandler from "./error/globalErrorHandler";
import notFound from "./error/notFound";

const app = express();
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(globalErrorHandler);
app.use(notFound);

app.get("/", (req, res) => {
  res.send("Hay! Hay! Hay! It's working!");
});

export default app;
