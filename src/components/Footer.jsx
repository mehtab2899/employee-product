import React from "react";
import "./scss/Footer.scss";

const Footer = () => {
	var date = new Date().getFullYear();
	console.log(date);

	return (
		<div className="footer">
			<h1>Employee Engagement</h1>
			<h2>Change for betterment</h2>
			<p>&copy; {date} by Company</p>
		</div>
	);
};

export default Footer;
