import express, { RequestHandler } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(express.json() as RequestHandler);
const PORT = process.env.PORT;

import routes from "./routes";
import { errorHandler } from "./errors";

app.use(routes);
app.use(errorHandler);

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Resources not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
