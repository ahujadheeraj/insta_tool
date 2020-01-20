import React from "react";
import { Link } from "react-router-dom";
import "./Thankyou.css";

const Thankyou = () => {
  return (
    <main className="thankyou centered my-5">
      <div>
        <h1 className="pb-2">Please check your inbox to confirm!</h1>
        <p>
          Please check your email and click the link provided to confirm your
          subscription. If you did not intend to subscribe, please ignore our
          confirmation email.
        </p>

        <Link to="/">
          <button className="button-container pt-2">
            Back to Previous Page
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Thankyou;
