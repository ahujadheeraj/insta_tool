import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Tool from "../../assets/images/logo/tool.jpg";

const Home = props => {
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    setEmail(e.target.value);
  };
  const handleSumbit = e => {
    e.preventDefault();

    if (email === "") {
      alert("Please fill out Email field");
    } else {
      setEmail({ ...email }, email);
      console.log(email);
      props.history.push("/thankyou");
    }
  };
  return (
    <div>
      <div className="banner py-3">
        <div className="row justify-content-center">
          <h1 className="title my-5">
            Get the SEO insights our industry-leading clients pay us to find.
          </h1>
          <div className="col-md-12 align-self-center text-center">
            <h2 className="title2">
              SEOs at companies like Amazon, IBM and Cisco get our findings
              before we share them in public.
            </h2>

            <div className="selection-list">
              <form onSubmit={handleSumbit} style={{ margin: 0 }}>
                <div className="selection-list-form">
                  <input
                    type="email"
                    className="selection-list-email"
                    value={email}
                    onChange={updateEmail}
                    placeholder="Your email address"
                  />

                  <input
                    type="submit"
                    value="Sign Up"
                    className="selection-list-submit"
                  />
                </div>
              </form>
            </div>

            <div className="textsub mb-5">
              Two emails per month (maximum). No ads. No affiliate links.
            </div>
          </div>
        </div>
      </div>
      <div className="tool text-center my-3">
        <h1>Check Out Our Pinterest Tool</h1>
        <Link className="link" to="/pinterest-SEO-Tool">
          <img src={Tool} height={280} width={450} alt="Pinterest Tool"></img>
        </Link>
      </div>
    </div>
  );
};

export default Home;
