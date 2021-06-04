import React, { useState } from "react";
import "./scss/Admin.scss";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

const Admin = () => {
	const [active, setActive] = useState("signin");

	return (
		<div className="admin">
			<div className="admin__btns">
				<button onClick={() => setActive("signin")}>SignIn</button>
				<button onClick={() => setActive("signup")}>SignUp</button>
			</div>
			<div className="admin__forms">
				{active === "signin" && <SignIn placeholder="Admin ID" />}
				{active === "signup" && <SignUp />}
			</div>
		</div>
	);
};

export default Admin;
