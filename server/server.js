import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import cors from "cors";
import { Server } from "socket.io";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

// users

// importing routes
import adminRoutes from "./routes/adminRoutes.js";

import employeeRoutes from "./routes/employeeRoutes.js";

// config dotenv environments
dotenv.config();

// db connection
connectDB();

const app = express();
const server = createServer(app);
const io = new Server(server);
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:5000",
		methods: ["GET", "POST"],
		allowedHeaders: ["my-custom-header"],
		credentials: true,
	})
);

// Defining CORS
app.use(function (req, res, next) {
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

// api end point
app.use("/api/admins", adminRoutes);
app.use("/api/employees", employeeRoutes);

app.use(notFound);
app.use(errorHandler);

// socketio

io.on("connection", (socket) => {
	console.log("connections done!");

	socket.on("join", ({ name, project }) => {
		console.log(name, project);
	});

	socket.on("disconnect", () => {
		console.log("user left the chat");
	});
});

// set port
server.listen(process.env.PORT, () => {
	console.log(
		`application is running on ${process.env.PORT}`.yellow.bold.underline
	);
});
