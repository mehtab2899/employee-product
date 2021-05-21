import React from "react";
import "./scss/Home.scss";
import Header from "./Header";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<div className="home__content" data-aos="zoom-in-up">
				<h1>Your Life's Work, Powered By Our Life's Work</h1>
				<p>
					Unique and powerful suite of software to run your entire business,
					brought to you by a company with the long term vision to transform the
					way you work. Unique and powerful suite of software to run your entire
					business, brought to you by a company with the long term vision to
					transform the way you work.
				</p>
				{/* <button>Get Started</button> */}
			</div>
		</div>
	);
};

export default Home;
