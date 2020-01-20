import React from 'react';
import Button from '../../components/Button/Button';
import StarRatings from 'react-star-ratings';
import Fade from 'react-reveal/Fade';
import Accordion from '../../components/Accordion/Accordion';

import InstallSvg from '../../assets/images/background/install.svg';
import FeaturesSvg from '../../assets/images/background/features.svg';
import MeteorSvg from '../../assets/images/icons/meteor.svg';
import RadarSvg from '../../assets/images/icons/radar.svg';
import StarsSvg from '../../assets/images/icons/stars.svg';
import CheckSvg from '../../assets/images/icons/check.svg';

import './Index.css';

const features = [
	{
		image: MeteorSvg,
		title: 'Get more followers',
		description:
			'With our follow back tool you know exactly whom to follow. This attracts a targeted follower base.'
	},
	{
		image: RadarSvg,
		title: 'Increase visibility of your posts',
		description: 'Increase visibility of your posts.'
	},
	{
		image: StarsSvg,
		title: 'Find influencers to boost visibility',
		description: 'Our micro-influencer tool gives you suggestions on getting the right influencer at right price.'
	}
];

const steps = [
	{
		title: 'Follow Back',
		description:
			'Our AI based algorithm predicts possible follow backs so that you don’t have to go through follow/unfollow routine'
	},
	{
		title: 'Peer Networks',
		description:
			'Our tools help you to be part of peer networks that’ll help you to boost visibility and gain followers when peers like your posts'
	},
	{
		title: 'Influencer Marketing',
		description:
			'Connect with micro influencers who can get you fast growth by promoting your content among their followers'
	}
];

export default function Index() {
	return (
		<div style={{ overflow: 'hidden' }}>
			{/* Hero */}
			<section className="container ">
				<div className="row">
					<div className="col-12 col-md-4 my-2" style={{ zIndex: 10 }}>
						<h2 className="heading">Get thousands of organic followers for your brand in Instagram.</h2>
						<p>
							InfluRocket brings together a set of AI based tools to skyrocket your Instagram growth. No
							spam. No fake followers.
						</p>
						<Button classes={'p-3'}>Get Started</Button>
					</div>
					<div className="col-12 col-md-8 my-2 ml-auto" style={{ zIndex: 10 }}>
						<video autoPlay={true} muted={true} loop={true} playsInline={true}>
							<source src="https://mailmeteor.com/assets/video/demo.mp4" />
						</video>
					</div>
				</div>
			</section>
			{/* Features */}
			<Fade bottom>
				<section id="features">
					<div
						className="img-fluid d-flex align-items-center"
						style={{
							backgroundImage: `url(${FeaturesSvg})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover'
						}}
					>
						<div className="w-75 mx-auto text-white features-wrapper">
							<h2 className="heading">Why InfluRocket?</h2>
							<p>InfluRocket combines AI with trusted marketing techniques</p>
							<div className="row mt-5">
								{features.map((feature, index) => (
									<div key={index} className="d-flex col-12 col-md-4">
										<div className="mx-3">
											<img src={feature.image} width={40} height={40} alt={feature.title} />
										</div>
										<div>
											<h4 className="heading feature-heading">{feature.title}</h4>
											<p>{feature.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</Fade>
			{/* Tutorial */}
			<Fade bottom>
				<section id="demo">
					<h2 className="text-center heading">Get Started</h2>
					<p className="text-center">Watch our tutorial or read our step-by-step guide.</p>
					<div className="embed-responsive embed-responsive-16by9 col-12 col-md-8 mx-auto">
						<iframe
							className="embed-responsive-item"
							src="https://www.youtube.com/embed/ccO5i3gQXSk?rel=0"
							allowFullScreen
						/>
					</div>
				</section>
			</Fade>
			{/* Tools */}
			<Fade bottom>
				<section>
					<div className="w-75 mx-auto">
						<h2 className="text-center heading">The tools you get with InfluRocket</h2>
						<p className="text-center">We add new tools on a regular basis</p>
						<div className="row mx-auto">
							{steps.map((step, index) => (
								<div key={index} className="card mx-auto mt-5" style={{ width: '20rem' }}>
									<span
										style={{
											width: '35px',
											height: '35px',
											borderRadius: '50%',
											backgroundColor: '#ff486a',
											margin: '0 auto',
											marginTop: '-20px'
										}}
										className="d-flex align-items-center justify-content-center text-white"
									>
										<strong>{index + 1}</strong>
									</span>
									<div className="card-body">
										<h5 className="card-title text-center heading">{step.title}</h5>
										<p className="card-text text-center">{step.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</Fade>
			{/* Install program */}
			<section className="text-center">
				<div
					className=" d-flex align-items-center"
					style={{
						backgroundImage: `url(${InstallSvg})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover'
					}}
				>
					<div className="install-wrapper mx-auto">
						<h2 className="heading text-white">Try it, it's free.</h2>
						<p className="text-white">Starting version is free, forever.</p>
						<Button classes="p-3 ">Get Started Now</Button>
					</div>
				</div>
			</section>
			{/* Pricing */}
			<Fade bottom>
				<section id="pricing" className="text-center pricing">
					<div className="w-75 mx-auto">
						<h2 className="heading">Get InfluRocket</h2>
						<p>Start free, upgrade whenever you need.</p>
						<div className="row my-5 ">
							<div className="col-12 col-md-5 border mx-auto mt-3 d-flex justify-content-between flex-column plan-container">
								<div>
									<h5 className="heading mt-3">Basic</h5>
									<p>Get up and running for free</p>
									<hr />
									<ul className="plan">
										<li className="plan-item">
											<img src={CheckSvg} width={10} height={10} alt="" /> 50 users with follow
											back potential
										</li>
										<li className="plan-item">
											<img src={CheckSvg} width={10} height={10} alt="" /> Access to 2 peer
											networks
										</li>
										<li className="plan-item">
											<img src={CheckSvg} width={10} height={10} alt="" /> Cost estimates for
											influencer marketing
										</li>
									</ul>
								</div>
								<div>
									<Button
										styles={{
											width: '90%',
											backgroundColor: 'white',
											color: '#ff486a',
											border: '2px solid #ff486a'
										}}
									>
										Start Free
									</Button>
								</div>
								<br />
							</div>
							<div
								className="col-12 col-md-6 mx-auto mt-3 d-flex justify-content-between flex-column plan-container"
								style={{ border: '2px solid #ff486a' }}
							>
								<span
									className="badge text-white m-1"
									style={{ position: 'absolute', right: '0', backgroundColor: '#ff486a' }}
								>
									Complete Version
								</span>
								<div>
									<h5 className="heading mt-3">InfluRocket Premium</h5>
									<p>Unlock full capacity</p>
									<hr />
									<ul className="plan">
										<li className="plan-item">
											<img src={CheckSvg} width={10} height={10} alt="" /> 500 users with follow
											back potential
										</li>
										<li className="plan-item">
											<img src={CheckSvg} width={10} height={10} alt="" /> Access to unlimited
											groups in your niche
										</li>
										<li className="plan-item">
											<img src={CheckSvg} width={10} height={10} alt="" /> Influencer estimates
											and contacts
										</li>
										<li className="plan-item">
											<img src={CheckSvg} width={10} height={10} alt="" /> Free profile review
										</li>
										<li className="plan-item">
											<img src={CheckSvg} width={10} height={10} alt="" /> Custom solutions to get
											followers specific to a country or gender
										</li>
									</ul>
								</div>
								<div>
									<Button styles={{ width: '90%' }}>VIEW ALL PLANS</Button>
								</div>
								<br />
							</div>
						</div>
					</div>
				</section>
			</Fade>
			{/* Reviews */}
			<Fade bottom>
				<section>
					<div className="w-75 mx-auto">
						<h2 className="text-center heading">Companies and influencers trust InfluRocket</h2>
						<p className="text-center">
							Companies and influencers all over the world trust InfluRocket for Instagram marketing
						</p>
						<div className="row my-5">
							<div className="col-12 col-md-5 mx-auto border review">
								<div className="d-flex align-items-center">
									<span className="review-qoute">’’</span>
									<p className="mt-4 ml-4">
										The tools are lot better than the bots and other alternatives available out
										there. I think InfluRocket is one of the strongest growth tools.
									</p>
								</div>
								<div className="ml-4 d-flex">
									<div>
										<h5 className="heading">Rupa</h5>
										<p className="text-muted">Analytics School</p>
									</div>
									<div className="ml-3">
										<StarRatings
											rating={5}
											starRatedColor="#F4B400"
											starDimension="20px"
											starSpacing="2px"
										/>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-5 mx-auto border review">
								<div className="d-flex align-items-center">
									<span className="review-qoute">’’</span>
									<p className="mt-4 ml-4">
										At first we were buying followers from various vendors and all of a sudden there
										was a huge drop in engagement. Then we switched to InfluRocket and the
										engagement has steadily increased since then.
									</p>
								</div>
								<div className="ml-4 d-flex">
									<div>
										<h5 className="heading">Veronica</h5>
										<p className="text-muted">Quantastic</p>
									</div>
									<div className="ml-3">
										<StarRatings
											rating={5}
											starRatedColor="#F4B400"
											starDimension="20px"
											starSpacing="2px"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Fade>
			{/* FAQS */}
			<section>
				<div className="w-75 mx-auto">
					<h2 className="text-center heading">FAQs</h2>
					<Accordion />
					<div className="text-center my-5">
						<Button>Documentation</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
