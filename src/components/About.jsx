import React from "react";
import "./scss/About.scss";
import img from "../img/home.png";

const About = () => {
	return (
		<div className="about">
			<h1>About</h1>
			<div className="about__content">
				<div data-aos="zoom-in">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint
						pariatur, non adipisci dolorum cumque labore nisi explicabo ipsum
						repellendus perferendis id aspernatur voluptas magnam. Quam ducimus
						sint dolore voluptas voluptate! Perspiciatis hic impedit consectetur
						tempora explicabo delectus vel fugit exercitationem quod? Repellat,
						illum! Ipsam perspiciatis adipisci reiciendis vel voluptates? Lorem
						ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, earum.
						Optio eaque alias expedita dolorem placeat dolores voluptatem
						repellat aut nobis, velit esse consequuntur, ea libero obcaecati
						dolore fuga hic?
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
						cupiditate tempora cumque accusamus veritatis, animi vero quod
						eveniet nobis repellendus quisquam eligendi, eos reprehenderit, in
						eaque delectus doloremque consectetur sunt.
					</p>
				</div>
				<img src={img} alt="" data-aos="zoom-in" />
			</div>
		</div>
	);
};

export default About;
