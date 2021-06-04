import React from "react";
import { NavLink } from "react-router-dom";
import emp_pic from "../img/p1.jpg";
import styled from "styled-components";
import JS from "./JS/date&time";

const AsideBar = () => {
	return (
		<AsideContainer>
			<div className="top">
				<img src={emp_pic} alt="profile-pic" />
				<h2>
					Alex Joe <br /> <span>Project Manager</span>
				</h2>
			</div>
			<div className="middle">
				<div className="time">{JS.dateTime()}</div>
				<div className="board">
					<i class="fas fa-border-all"></i>Dashboard
				</div>
			</div>
			<div className="bottom">
				<ul>
					<li>
						<NavLink className="link" to="/feedback">
							<i class="fas fa-comment-alt"></i>Feedback
						</NavLink>
					</li>
					<li>
						<NavLink className="link" to="/support">
							<i class="fas fa-question-circle"></i>Support
						</NavLink>
					</li>
					<li>
						<NavLink className="link" to="/signs">
							<i class="fas fa-sign-out-alt"></i>Logout
						</NavLink>
					</li>
				</ul>
			</div>
		</AsideContainer>
	);
};

const AsideContainer = styled.div`
	background: #1f2841;
	color: #fff;
	font-weight: bold;
	height: 100vh;
	position: relative;
	border-right: 2px solid #000;
	padding: 0 1rem;

	& .top {
		display: flex;
		padding-top: 2rem;

		& img {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			margin-right: 2rem;
		}

		& h2 {
			font-weight: bold;

			& span {
				font-size: 1.2rem;
				font-weight: normal;
			}
		}
	}

	& .middle {
		margin-top: 3rem;

		& .time {
			font-size: 2.5rem;
		}

		& .board {
			margin-top: 10rem;
			font-size: 3rem;
		}
	}

	& .bottom {
		position: absolute;
		bottom: 0;

		& ul {
			list-style: none;

			& li {
				& .link {
					text-decoration: none;
					color: #fff;
				}

				& i {
					margin-right: 1rem;
				}

				font-size: 2rem;
				margin: 1rem 0;
			}
		}
	}
`;

export default AsideBar;
