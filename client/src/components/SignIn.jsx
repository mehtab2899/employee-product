import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./actions/action.auth";
import "./scss/SignIn.scss";

const SignIn = ({ login, placeholder }) => {
	const [loginData, setLoginData] = useState({
		adminID: "",
		password: "",
	});

	const { adminID, password } = loginData;

	const onChange = (e) =>
		setLoginData({ ...loginData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		login(adminID, password);
		console.log(adminID, password);
	};
	return (
		<div className="signin">
			<h1>SignIn</h1>
			<p>Login to your account</p>
			<form onSubmit={(e) => onSubmit(e)}>
				<input
					type="text"
					onChange={(e) => onChange(e)}
					autoComplete="on"
					name="adminID"
					placeholder={placeholder}
				/>
				<input
					type="password"
					onChange={(e) => onChange(e)}
					autoComplete="on"
					name="password"
					placeholder="password"
				/>

				<NavLink to="/forgot">Forgot your password?</NavLink>
				<button type="submit">
					<NavLink to="admin-dashboard">SignIn</NavLink>
				</button>
			</form>
		</div>
	);
};

export default connect(null, { login })(SignIn);
