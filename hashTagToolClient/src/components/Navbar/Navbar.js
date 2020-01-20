import React from 'react';
import Link from 'react-scroll/modules/components/Link';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Navbar.css';

import {
	NavLink as RouterLink
} from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
			<div className="container">
				<RouterLink to="/">
					<Logo />
				</RouterLink>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="d-flex align-items-center navbar-nav ml-auto font-weight-bold">

						<RouterLink
							className="nav-item nav-link text-uppercase"
							to="/tools/calc"
							style={{ cursor: 'pointer' }}
						>
							Tools
						</RouterLink>

						<RouterLink
							className="nav-item nav-link text-uppercase"
							to="/blogs"
							style={{ cursor: 'pointer' }}
						>
							Blogs
						</RouterLink>

						<RouterLink
							className="nav-item nav-link text-uppercase"
							to="/blog/b-id"
							style={{ cursor: 'pointer' }}
						>
							Test blog
						</RouterLink>

						<RouterLink
							className="nav-item nav-link text-uppercase"
							to="/pinterest-SEO-Tool"
							style={{ cursor: 'pointer' }}
						>
							Pinterest-Tool
						</RouterLink>

						<RouterLink
							className="nav-item nav-link text-uppercase"
							to="/followback"
							style={{ cursor: 'pointer' }}
						>
							Follow-Back
						</RouterLink>

						<RouterLink
							className="nav-item nav-link text-uppercase"
							 to="/hashtag"
							style={{ cursor: 'pointer' }}
						>
							Hashtag
						</RouterLink>

						<Link
							href="#"
							className="nav-item nav-link text-uppercase"
							to="features"
							spy={true}
							smooth={true}
							style={{ cursor: 'pointer' }}
						>
							Features
						</Link>

						<Link
							href="#"
							className="nav-item nav-link text-uppercase"
							to="demo"
							spy={true}
							smooth={true}
							style={{ cursor: 'pointer' }}
						>
							Demo
						</Link>

						<Link
							href="#"
							className="nav-item nav-link text-uppercase"
							to="pricing"
							spy={true}
							smooth={true}
							style={{ cursor: 'pointer' }}
						>
							Pricing
						</Link>

						<RouterLink
							className="nav-item nav-link text-uppercase"
							to="/admin"
							style={{ cursor: 'pointer' }}
						>
							<Button>Login</Button>
						</RouterLink>

						{/* <span className="nav-item nav-link" href="#">
							<Button>Install</Button>
						</span> */}
					</div>
				</div>
			</div>
		</nav>
	);
}
