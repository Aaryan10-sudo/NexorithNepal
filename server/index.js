import express, { json } from "express";
import cors from "cors";
import connectDB from "./schema/connectDB/connectDB.js";
import courseRouter from "./router/courseRouter.js";
connectDB();
let app = express();
let port = process.env.PORT || 10000;
app.use(json());
app.use(cors());
app.use("/course", courseRouter);

app.get("/readall", (req, res) => {
  res.json({ message: "Data retrieved successfully!" });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
