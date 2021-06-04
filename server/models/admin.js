// admin data model
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

let adminSchema = mongoose.Schema(
	{
		adminID: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		org_name: {
			type: String,
			require: true,
			unique: true,
		},
	},
	{
		connection: "admins",
	}
);

adminSchema.plugin(uniqueValidator, { message: "AdminID already exist" });

export default mongoose.model("Admin", adminSchema);
