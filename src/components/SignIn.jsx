import React from "react";
import "./scss/SignIn.scss";

const SignIn = ({ placeholder }) => {
	return (
		<div className="signin">
			<h1>SignIn</h1>
			<p>Login to your account</p>
			<form>
				<input type="text" placeholder={placeholder} />
				<input type="password" placeholder="Password" />
				<a href="#forgot">Forgot your password?</a>
				<button>SignIn</button>
			</form>
		</div>
	);
};

export default SignIn;
