// auth route
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import adminSchema from "../models/admin.js";
import authorize from "../middlewares/auth.js";
const router = express.Router();

// sign in
router.post("/signin-admin", (req, res, next) => {
	let getAdmin;
	adminSchema
		.findOne({
			adminID: req.body.adminID,
		})
		.then((admin) => {
			if (!admin) {
				return res.status(401).json({
					message: "Login Failed!",
				});
			}
			getAdmin = admin;
			return bcrypt.compare(req.body.password, admin.password);
		})
		.then((response) => {
			if (!response) {
				return res.status(401).json({
					message: "Login Failed!",
				});
			}
			let jwtToken = jwt.sign(
				{
					adminID: getAdmin.adminID,
					adminID: getAdmin._id,
				},
				"longer-secret-is-better",
				{
					expiresIn: "1h",
				}
			);
			res
				.status(200)
				.json({
					token: jwtToken,
					expiresIn: 6000,
					msg: getAdmin,
				})
				.catch((err) => {
					return res.status(401).json({
						message: "Login Failed!",
					});
				});
		});
});

// sign up
router.post("/signup-admin", (req, res, next) => {
	bcrypt.hash(req.body.password, 10).then((hash) => {
		const admin = new adminSchema({
			adminID: req.body.adminID,
			org_name: req.body.org_name,
			password: hash,
		});
		admin.save().then((response) => {
			res
				.status(201)
				.json({
					message: "Admin Created!",
					result: response,
				})
				.catch((error) => {
					res.status(500).json({
						error: error,
					});
				});
		});
	});
});

// get all admins
router.route("/all-admin").get(authorize, (req, res) => {
	adminSchema.find((error, response) => {
		if (error) {
			return next(error);
		}
		res.status(200).json(response);
	});
});

export default router;
