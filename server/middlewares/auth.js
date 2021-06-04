// auth middlewares
import jwt from "jsonwebtoken";

export default (req, res, next) => {
	try {
		const token = req.header("x-auth-token");
		jwt.verify(token, "longer-secret-is-better");
		next();
	} catch (error) {
		res.status(401).json({ message: "No token cannot authorize" });
	}
};
