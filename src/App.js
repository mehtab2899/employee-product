import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

AOS.init();

const App = () => {
	return (
		<div>
			{/* home */}
			<Home />

			{/* about */}
			<About />

			{/* services */}
			<Services />

			{/* pricing */}
			<Pricing />

			{/* footer */}
			<Footer />
		</div>
	);
};

export default App;
