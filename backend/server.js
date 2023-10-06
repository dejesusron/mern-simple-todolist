import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoListRoutes from "./routes/todoListRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/todos", todoListRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});