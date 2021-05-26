import React from "react";
import Home from "../Home.jsx";
import About from "../About.jsx";
import Features from "../Features.jsx";
import Pricing from "../Pricing.jsx";

const HomeScreen = () => {
	return (
		<div>
			{/* home */}
			<Home />

			{/* about */}
			<About />

			{/* features */}
			<Features />

			{/* pricing */}
			<Pricing />
		</div>
	);
};

export default HomeScreen;
