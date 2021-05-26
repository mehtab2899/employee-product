import React from "react";
import SignIn from "./SignIn";
import "./scss/mixins/Employee.scss";

const Employee = () => {
	return (
		<div className="employee">
			<SignIn placeholder="Employee ID" />
		</div>
	);
};

export default Employee;
