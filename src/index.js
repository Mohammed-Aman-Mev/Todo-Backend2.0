import Express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./db/dbConfig.js";
import { router } from "./routes/todoRoutes.js";
import cors from "cors"

dotenv.config({
  path: "./env",
});

const app = Express();
const port = process.env.PORT || 8000;

dbConnection();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors({origin:process.env.CORS_ORIGIN}))
app.use("/api/v1/todo", router);

app.get("/", (req, res) => {
  res.send("HEllo from backend");
});

app.listen(port, () => {
  console.log(`Server is working on PORT:${port}`);
});
