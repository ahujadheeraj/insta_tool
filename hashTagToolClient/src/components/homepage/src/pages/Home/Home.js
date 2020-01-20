import React from "react";
import Svg from "../../assets/images/background/header.svg";
import "./Home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div
      className="pt-4"
      style={{
        width: "100vw",
        height: "450px",
        backgroundImage: `url(${Svg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Fade>
        <div className="text-center text-white mx-5">
          <h1 className="mt-4 pt-2">
            Tools to expand your social media reach, research
            <br /> influencers for your niche and monitor your profile
          </h1>
          <h4 className="mt-4 mb-3">
            Our social media SEO tools help you research the best content
            <br />
            and keywords to find out what you need to do to rank high
          </h4>
          <button className="Signup mt-4">
            Sign up for a 30 day free trial
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
