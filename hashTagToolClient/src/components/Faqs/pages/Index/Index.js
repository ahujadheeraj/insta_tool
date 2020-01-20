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
		<div className = "index" >

			
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
