import React from 'react';
import Button from '../../components/Button/Button';
import StarRatings from 'react-star-ratings';
import Fade from 'react-reveal/Fade';
import Accordion from '../../components/Accordion/Accordion';

export default class IndexExtra extends React.Component
{
    render()
    {
        return (
            <div>
                {/* Reviews */}
                {/* <Fade bottom>
                <section>
                    <div className="w-75 mx-auto">
                        <h2 className="text-center heading">Join The Growth Marketers</h2>
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
                </Fade> */}

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
}
