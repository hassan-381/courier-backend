import express from "express";
import cors from "cors";
import app from "./app.js";
import dbConnection from "./database/dbConnection.js";

const expApp = express();
expApp.use(express.json());

expApp.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

expApp.use("/api", app);

const port = process.env.PORT || 5000;

dbConnection().then(() => {
  expApp.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
