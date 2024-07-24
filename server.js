import express from "express";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotEnv from "dotenv";
import connectDB from "./database/db.js";

dotEnv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

const PORT = process.env.PORT;
// routes :
app.use("/", router);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
