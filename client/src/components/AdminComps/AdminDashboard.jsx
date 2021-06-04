import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/AdminScss/Dashboard.scss";
import { FeaturesData } from "../data/FeaturesData";
import AsideBar from "../AsideBar";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<aside>
				<AsideBar />
			</aside>
			<main className="dashboard__main">
				<header>
					<h1>DASHBOARD</h1>
				</header>
				<main>
					<div className="feature" id="features">
						<div className="feature__content">
							{FeaturesData.map((service, index) => {
								return (
									<div className="feature__content--box" key={index}>
										<NavLink to="/" className="link">
											<div className="front-face">
												<i class={service.icon}></i>{" "}
												<span>{service.title1}</span>
											</div>
										</NavLink>
									</div>
								);
							})}
						</div>
					</div>
				</main>
			</main>
		</div>
	);
};

export default Dashboard;
