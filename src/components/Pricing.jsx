import React from "react";
import "./scss/Pricing.scss";

const Pricing = () => {
	return (
		<div className="pricing">
			<h1>Pricing</h1>
			<div className="pricing__content">
				<div className="pricing__content--box">
					<i class="fas fa-money-check-alt"></i>
					<h4>Basic</h4>
					<h1>$15</h1>
					<ul>
						<li>abc</li>
						<li>xyz</li>
						<li>xyz</li>
					</ul>
					<button>Explore Now</button>
				</div>
				<div className="pricing__content--box">
					<i class="fas fa-money-check-alt"></i>
					<h4>Standard</h4>
					<h1>$30</h1>
					<ul>
						<li>abc</li>
						<li>xyz</li>
						<li>xyz</li>
					</ul>
					<button>Explore Now</button>
				</div>
				<div className="pricing__content--box">
					<i class="fas fa-money-check-alt"></i>
					<h4>Enterprise</h4>
					<h1>$50</h1>
					<ul>
						<li>abc</li>
						<li>xyz</li>
						<li>xyz</li>
					</ul>
					<button>Explore Now</button>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
