import React from "react";
import "./scss/About.scss";
import img1 from "../img/e1.jpg";
import img2 from "../img/e2.jpg";
import img3 from "../img/e3.jpg";

const About = () => {
	return (
		<div className="about">
			<h1>About</h1>
			<div className="about__content">
				<div className="about__content--left">
					<h2>YOU'RE GONNA FALL IN LOVE WITH NATURE</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
						nulla! Officia vero itaque voluptates temporibus quasi quaerat
						ipsam.
					</p>
					<h2>YOU'RE GONNA FALL IN LOVE WITH NATURE</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
						nulla! Officia vero itaque voluptates temporibus quasi quaerat
						ipsam.
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
