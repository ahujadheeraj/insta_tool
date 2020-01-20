import React from 'react';
import Fade from 'react-reveal';
import {Helmet} from 'react-helmet';

import './blogHomeStyles.css';

export default class BlogHome extends React.Component
{
    render()
    {
        return (
            <Fade>
                <Helmet>
                    <title>Influrocket | Blogs</title>
                </Helmet>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8 blog-boxes-container">
                            <div className="blog-container">
                                <div className="blog-title">
                                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Ipsum Ipsum Lo
                                </div>
                                <div className="blog-credit">
                                    <img
                                        className="blog-credit-image"
                                        src="https://www.influrocket.com/wp-content/uploads/2019/11/siteicon.jpg"
                                    />
                                    <p>
                                        Research By InfluRocket Team
                                    </p>
                                </div>
                                <div className="blog-content container">
                                    <div className="row">
                                        <p className="col-lg-8">
                                            Social Media learner's internship from InfluRocket is the perfect launchpad for future Social Media Marketers.
                                            This internship is designed as a game where each of you is eligible for real cash prizes.
                                            There are total of 12 prizes, each worth Rs. 3000- Rs.4000.
                                            In addition there are 2 prizes each of Rs.1000 for Best Email and Max Liker.
                                            A total of 16 interns will win cash prizes.
                                            (if there is a tie for a single prize, prize money will be equally distributed among the interns winning the prize).
                                        </p>
                                        <div className="col-lg-4">
                                            <img
                                                className="blog-image"
                                                src="https://www.influrocket.com/wp-content/uploads/2019/11/allie-smith-gAgToJDComQ-unsplash.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-container">
                                <div className="blog-title">
                                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Ipsum Ipsum Lo
                                </div>
                                <div className="blog-credit">
                                    <img
                                        className="blog-credit-image"
                                        src="https://www.influrocket.com/wp-content/uploads/2019/11/siteicon.jpg"
                                    />
                                    <p>
                                        Research By InfluRocket Team
                                    </p>
                                </div>
                                <div className="blog-content container">
                                    <div className="row">
                                        <p className="col-lg-8">
                                            Social Media learner's internship from InfluRocket is the perfect launchpad for future Social Media Marketers.
                                            This internship is designed as a game where each of you is eligible for real cash prizes.
                                            There are total of 12 prizes, each worth Rs. 3000- Rs.4000.
                                            In addition there are 2 prizes each of Rs.1000 for Best Email and Max Liker.
                                            A total of 16 interns will win cash prizes.
                                            (if there is a tie for a single prize, prize money will be equally distributed among the interns winning the prize).
                                        </p>
                                        <div className="col-lg-4">
                                            <img
                                                className="blog-image"
                                                src="https://www.influrocket.com/wp-content/uploads/2019/11/allie-smith-gAgToJDComQ-unsplash.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-container">
                                <div className="blog-title">
                                    Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Ipsum Ipsum Lo
                                </div>
                                <div className="blog-credit">
                                    <img
                                        className="blog-credit-image"
                                        src="https://www.influrocket.com/wp-content/uploads/2019/11/siteicon.jpg"
                                    />
                                    <p>
                                        Research By InfluRocket Team
                                    </p>
                                </div>
                                <div className="blog-content container">
                                    <div className="row">
                                        <p className="col-lg-8">
                                            Social Media learner's internship from InfluRocket is the perfect launchpad for future Social Media Marketers.
                                            This internship is designed as a game where each of you is eligible for real cash prizes.
                                            There are total of 12 prizes, each worth Rs. 3000- Rs.4000.
                                            In addition there are 2 prizes each of Rs.1000 for Best Email and Max Liker.
                                            A total of 16 interns will win cash prizes.
                                            (if there is a tie for a single prize, prize money will be equally distributed among the interns winning the prize).
                                        </p>
                                        <div className="col-lg-4">
                                            <img
                                                className="blog-image"
                                                src="https://www.influrocket.com/wp-content/uploads/2019/11/allie-smith-gAgToJDComQ-unsplash.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className="extra-content-container">
                                <div className="extra-content-head">
                                    Online marketing techniques that actually work
                                </div>
                                <div className="extra-content-sub-head">
                                    Get notified of new posts, plus get exclusive details on Social Media and Online Marketing hacks
                                </div>
                                <div className="small-signup-container">
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control mb-2" type="text" placeholder="Name"></input>
                                            <input className="form-control mb-2" type="text" placeholder="Email"></input>
                                            <button className="btn btn-dark">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fade>
        );
    }
}