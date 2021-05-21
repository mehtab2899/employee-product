import React, { useState, useEffect } from "react";
import "./scss/Header.scss";
import { NavItems } from "./NavItems";
import logo from "../img/logo.png";

const Header = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`header ${show && "header__bg"}`}>
			<nav className="header__nav">
				<img src={logo} className="header__nav--logo" alt="logo" />
				<ul className="header__nav--items">
					{NavItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Header;
