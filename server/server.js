import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import cors from "cors";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import employees from "./data/employees.js";

// importing routes
import adminRoutes from "./routes/adminRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";

// config dotenv environments
dotenv.config();

// db connection
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// api end point
app.use("/api/admins", adminRoutes);
app.use("/api/employees", employeeRoutes);

app.use(notFound);
app.use(errorHandler);

// set port
app.listen(process.env.PORT, () => {
	console.log(
		`application is running on ${process.env.PORT}`.yellow.bold.underline
	);
});
