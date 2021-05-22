import React from "react";
import "./scss/Home.scss";

const Home = () => {
	return (
		<div className="home">
			<div
				className="home__content"
				data-aos="zoom-in-up"
				data-aos-duration="1500"
			>
				<h1>
					<span className="word1">We love </span>
					to empower <span className="word2">Employee Peformace</span>,
					thoughtfully focused on <span className="word2">Business Growth</span>
					, and with fully powered{" "}
					<span className="word2">Employee Engagement.</span>
				</h1>
				<button>Explore our services</button>
			</div>
		</div>
	);
};

export default Home;
