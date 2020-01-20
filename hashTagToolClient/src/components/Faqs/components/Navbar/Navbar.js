import React from 'react';
import Link from 'react-scroll/modules/components/Link';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Navbar.css';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
			<div className="container">
				<Logo />
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

						<span className="nav-item nav-link" href="#">
							<Button>Install</Button>
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
}
