import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { signup } from "./actions/action.auth";
import "./scss/SignUp.scss";

const SignUp = ({ signup, check_authenticated }) => {
	const [signupData, setSignupData] = useState({
		adminID: "",
		org_name: "",
		password: "",
	});

	const { adminID, org_name, password } = signupData;

	const onChange = (e) =>
		setSignupData({ ...signupData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		signup(adminID, org_name, password);
	};

	return (
		<div className="signup">
			<h1>SignUp</h1>
			<p>Create your account</p>
			<form onSubmit={(e) => onSubmit(e)}>
				<input
					name="adminID"
					type="text"
					onChange={(e) => onChange(e)}
					autoComplete="on"
					placeholder="Admin ID"
					required
				/>
				<input
					name="org_name"
					type="text"
					onChange={(e) => onChange(e)}
					autoComplete="on"
					placeholder="Organisation Name"
					required
				/>
				<input
					name="password"
					type="password"
					onChange={(e) => onChange(e)}
					autoComplete="on"
					placeholder="Password"
					required
				/>
				<button type="submit">SignUp</button>
			</form>
		</div>
	);
};

// const mapDispatchToProps = (state) => {
// 	return {
// 		isAuthenticated: state.auth.check_authenticated,
// 	};
// };

export default connect(null, { signup })(SignUp);
