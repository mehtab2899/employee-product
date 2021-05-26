import React from "react";
import "./scss/SignUp.scss";

const SignUp = () => {
	return (
		<div className="signup">
			<h1>SignUp</h1>
			<p>Create your account</p>
			<form>
				<input type="text" placeholder="Admin ID" />
				<input type="text" placeholder="Organisation Name" />
				<input type="password" placeholder="Password" />
				<button>SignUp</button>
			</form>
		</div>
	);
};

export default SignUp;
