import React from "react";
import "./scss/Pricing.scss";

const Pricing = () => {
	return (
		<div className="pricing">
			<h1>Pricing</h1>
			<div className="pricing__content">
				<div className="card">
					<div className="title">
						<i className="fa fa-paper-plane" aria-hidden="true"></i>
						<h2>Basic</h2>
					</div>
					<div className="price">
						<h4>
							<sup>$</sup>10
						</h4>
					</div>
					<div className="option">
						<ul>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Meeting
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Project
								Management
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Email Inbox
							</li>
							<li>
								<i className="fa fa-times" aria-hidden="true"></i> Chat App
							</li>
							<li>
								<i className="fa fa-times" aria-hidden="true"></i> Tracking
								Management
							</li>
							<li>
								<i className="fa fa-times" aria-hidden="true"></i> Document
								Sharing
							</li>
						</ul>
					</div>
					<a href="#e">Explore Now</a>
				</div>
				<div className="card ">
					<div className="title">
						<i className="fa fa-plane-departure" aria-hidden="true"></i>
						<h2>Standard</h2>
					</div>
					<div className="price">
						<h4>
							<sup>$</sup>25
						</h4>
					</div>
					<div className="option">
						<ul>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Meeting
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Project
								Management
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Email Inbox
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Chat App
							</li>
							<li>
								<i className="fa fa-times" aria-hidden="true"></i> Tracking
								Management
							</li>
							<li>
								<i className="fa fa-times" aria-hidden="true"></i> Document
								Sharing
							</li>
						</ul>
					</div>
					<a href="#e">Explore Now</a>
				</div>
				<div className="card">
					<div className="title">
						<i className="fa fa-rocket" aria-hidden="true"></i>
						<h2>Premium</h2>
					</div>
					<div className="price">
						<h4>
							<sup>$</sup>50
						</h4>
					</div>
					<div className="option">
						<ul>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Meeting
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Project
								Management
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Email Inbox
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Chat App
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Tracking
								Management
							</li>
							<li>
								<i className="fa fa-check" aria-hidden="true"></i> Document
								Sharing
							</li>
						</ul>
					</div>
					<a href="#e">Explore Now</a>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
