import React from "react";
import "./scss/About.scss";
import img1 from "../img/e1.jpg";
import img2 from "../img/e2.jpg";
import img3 from "../img/e4.jpg";

const About = () => {
	return (
		<div className="about" id="about">
			<h1>About</h1>
			<div className="about__content">
				<div className="about__content--left">
					<h2>
						Build an <span>Engaged Workforce</span>
					</h2>
					<p>
						Improve team collaboration with continuous check-ins on goals and
						inspire employees with instant appreciation, awards and peer
						recognition. And create teams and manage project flawless and
						empower your business.
					</p>
					<h2>
						Drive your <span>Employee Performance</span>
					</h2>
					<p>
						Build high performing teams with continuous tracking management and
						employee engagement system. And get control and maintain your
						employee progress.
					</p>
				</div>

				<div className="about__content--right">
					<img src={img3} className="i1" alt="about-img" />
					<img src={img1} className="i2" alt="about-img" />
					<img src={img2} className="i3" alt="about-img" />
				</div>
			</div>
		</div>
	);
};

export default About;
