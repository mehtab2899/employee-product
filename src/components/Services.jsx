import React from "react";
import "./scss/Services.scss";
import { ServicesData } from "./ServicesData";

const Services = () => {
	return (
		<div className="services" id="features">
			<h1>Features </h1>
			<div className="services__content">
				{ServicesData.map((service, index) => {
					return (
						<div className="services__content--box" key={index}>
							<div className="front-face">
								<i class={service.icon}></i> <span>{service.title1}</span>
							</div>
							<div className="back-face">
								<span>{service.title2}</span>
								<p>{service.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
