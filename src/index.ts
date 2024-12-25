import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectionPool from "./configs/db.config";
import routesConfig from "./routes/index";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const packageJson = require("../package.json");
  const appVersion = packageJson.version;
  res.send(`Running todo list with redis ${appVersion}`);
});

app.use("/api", routesConfig);

connectionPool.getConnection((err) => {
  if (err) {
    console.error("Pesan Error ba konek ke database:", err);
    return;
  }

  console.log("Connected to the MySQL database.");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
