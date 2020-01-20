import React from 'react';
import Svg from '../../assets/images/background/footer.svg';

import './Footer.css';

export default function Footer() {
	return (
		<footer
			className="page-footer font-small stylish-color-dark pt-4"
			style={{
				position: 'absolute',
				width: '100%',
				height: '400px',
				backgroundImage: `url(${Svg})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
		>
			<div className="container text-center text-md-left" style={{ marginTop: '100px' }}>
				<div className="col-12 text-center mb-3">
					<h2 className="font-weight-bold text-white">InfluRocket</h2>
				</div>
				<div className="row mt-4">
					<div className=" col-12 col-md-5 d-flex mx-auto text-white ">
						<div className="mx-auto">
							<small className="mt-3 list-title">Company</small>

							<ul className="list-unstyled footer-list">
								<li>
									<a href="#!">Contact Us</a>
								</li>
								<li>
									<a href="#!">Support</a>
								</li>
								<li>
									<a href="#!">Jobs</a>
								</li>
							</ul>
						</div>

						<div className="mx-auto">
							<small className="mt-3 list-title">Resources</small>
							<ul className="list-unstyled footer-list">
								<li>
									<a href="#!">Tutorial</a>
								</li>
								<li>
									<a href="#!">Comparison</a>
								</li>
								<li>
									<a href="#!">Pricing</a>
								</li>
								<li>
									<a href="#!">Educational Program</a>
								</li>
							</ul>
						</div>

						<div className=" mx-auto">
							<small className="mt-3 list-title">Data</small>

							<ul className="list-unstyled footer-list">
								<li>
									<a href="#!">Privacy</a>
								</li>
								<li>
									<a href="#!">Terms</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
