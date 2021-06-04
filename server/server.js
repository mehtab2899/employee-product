import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import auth from "./routes/auth.routes.js";

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);

app.get("/", (req, res) => {
	res.status(200).send("hello");
});

// set port
app.listen(process.env.PORT, () => {
	console.log(`application is running on ${process.env.PORT}`);
});
