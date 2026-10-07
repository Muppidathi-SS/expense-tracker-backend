import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import Routes from "./routes/routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("SERVER FILE LOADED");

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Expense Tracker API is running",
  });
});

app.use("/api", Routes);

// ==========================
// Swagger
// ==========================

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Expense Tracker API",
      version: "1.0.0",
      description: "Expense Tracker Backend API",
    },
    tags: [
      {
        name: "Guests",
      },
      {
        name: "Dashboard",
      },
      {
        name: "Categories",
      },

      {
        name: "Expenses",
      },
      {
        name: "Payment Methods",
      },
      {
        name: "Incomes",
      },
    ],
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },

  apis: ["./src/routes/*.ts", "./src/swagger/*.swagger.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res) => {
  console.log(`404: Route not found - ${req.method} ${req.originalUrl}`);

  res.status(404).json({
    success: false,
    message: "API route not found",
    method: req.method,
    path: req.originalUrl,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
