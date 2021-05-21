import React from "react";
import "./scss/Services.scss";

const Services = () => {
	return (
		<div className="services">
			<h1>Services</h1>
			<div className="services__content">
				<div className="services__content--box">
					<div className="front-face">
						<i class="fas fa-video"></i> <span>Meeting</span>
					</div>
					<div className="back-face">
						<span>Meeting</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
							architecto perspiciatis, labore quis reprehenderit quas ad
							quisquam sunt consectetur natus, error unde nemo amet, cumque
							accusamus asperiores itaque quidem quod.
						</p>
					</div>
				</div>
				<div className="services__content--box">
					<div className="front-face">
						<i class="fas fa-project-diagram"></i> <span>Project</span>
					</div>
					<div className="back-face">
						<span>Project Management</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
							architecto perspiciatis, labore quis reprehenderit quas ad
							quisquam sunt consectetur natus, error unde nemo amet, cumque
							accusamus asperiores itaque quidem quod.
						</p>
					</div>
				</div>
				<div className="services__content--box">
					<div className="front-face">
						<i class="fas fa-comment-alt"></i> <span>Chat</span>
					</div>
					<div className="back-face">
						<span>Chat System</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
							architecto perspiciatis, labore quis reprehenderit quas ad
							quisquam sunt consectetur natus, error unde nemo amet, cumque
							accusamus asperiores itaque quidem quod.
						</p>
					</div>
				</div>
				<div className="services__content--box">
					<div className="front-face">
						<i class="fas fa-envelope"></i> <span>Gmail</span>
					</div>
					<div className="back-face">
						<span>Gmail Window</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
							architecto perspiciatis, labore quis reprehenderit quas ad
							quisquam sunt consectetur natus, error unde nemo amet, cumque
							accusamus asperiores itaque quidem quod.
						</p>
					</div>
				</div>
				<div className="services__content--box">
					<div className="front-face">
						<i class="fas fa-chart-line"></i> <span>Tracking</span>
					</div>
					<div className="back-face">
						<span>Tracking Management</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
							architecto perspiciatis, labore quis reprehenderit quas ad
							quisquam sunt consectetur natus, error unde nemo amet, cumque
							accusamus asperiores itaque quidem quod.
						</p>
					</div>
				</div>
				<div className="services__content--box">
					<div className="front-face">
						<i class="fas fa-file-word"></i>
						<span>Document</span>
					</div>
					<div className="back-face">
						<span>Document Sharing</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
							architecto perspiciatis, labore quis reprehenderit quas ad
							quisquam sunt consectetur natus, error unde nemo amet, cumque
							accusamus asperiores itaque quidem quod.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
