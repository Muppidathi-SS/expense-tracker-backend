import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getTest } from "./controllers/test.controller";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("SERVER FILE LOADED");

app.get("/test", (req, res) => {
  res.json({
    message: "Test route working",
  });
});

app.get("/api/testing", getTest);

console.log("API ROUTE REGISTERED: GET /api/testing");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});