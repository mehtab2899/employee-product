import React from "react";
import "./scss/Footer.scss";
import logo from "../img/logo.png";

const Footer = () => {
	var date = new Date().getFullYear();
	console.log(date);

	return (
		<div className="footer">
			<img src={logo} alt="logo" />
			<p>&copy;{date} by Employee Engagement System</p>
		</div>
	);
};

export default Footer;
