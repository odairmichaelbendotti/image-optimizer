import express from "express";
import { routes } from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
