import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import './style.scss';
import logo from '../images/logo-med.png';


const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://www.serverless4all.com"
					>
						<img src={logo} alt="site-logo" />

					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
							<a className="has-text-white" href="/about">
								<span className="icon">
									<FaUserCircle size="fa-2x" />
								</span>
								<span>About</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
