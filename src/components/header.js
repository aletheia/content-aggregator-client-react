import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import logo from '../images/logo-med.png';

import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-large-with-navbar is-bold">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<figure className="is-left">
						<span className="icon is-large ">
							<img src={logo} alt="s4a-logo" />
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<h1 className="ml-2 is-uppercase is-size-1 has-text-white  is-italic has-shadow is-size-1-touch">
								 serverless 4 all	
							</h1>
							<p className="ml-4 subtitle has-text-white is-size-3 has-text-weight-light">
								make everything serverless
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
