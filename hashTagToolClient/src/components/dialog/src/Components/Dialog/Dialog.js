import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import "./Dialog.css";
function Dialog() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const updateEmail = e => {
    setEmail(e.target.value);
  };
  const updateBox = e => {
    setIsChecked(e.target.checked);
  };
  const handleSumbit = e => {
    e.preventDefault();

    if (email === "") {
      alert("Please fill out Email field");
    } else {
      if (isChecked === false) {
        alert("In order to register you need to accept our Terms of Use");
      } else {
        console.log(email);
      }
    }
  };
  return (
    <div className="container-fluid m-0 p-0" style={{ maxHeight: "100%" }}>
      <div className="card mx-auto border-0 formcard">
        <article className="card-body p-0 justify-content-center">
          <div className="uppercard">
            <div className="innercontent">
              <div className="uppertext">
                <p>
                  Our SEO tool with below listed features is coming soon. Sign
                  up now for one free month when we launch
                </p>
              </div>

              <div className="lowertext">
                <div className="d-flex">
                  <CheckIcon
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                  <p>
                    Pro-search feature with up to 200 keyword
                    suggestions,keyword volumes and keyword difficulty
                  </p>
                </div>
                <div className="d-flex">
                  <CheckIcon
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                  <p>
                    Top content for each keyword along with followers and other
                    information in downloadable format
                  </p>
                </div>
                <div className="d-flex">
                  <CheckIcon
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                  <p>
                    Top influencers for each niche and their content analysis
                  </p>
                </div>

                <div className="d-flex">
                  <CheckIcon
                    style={{ fontSize: "2.5rem", marginRight: "1rem" }}
                  />
                  <p>
                    Profile audit by our experts once a month with actionable
                    insights
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="lowerpart">
            <form onSubmit={handleSumbit}>
              <input
                type="email"
                value={email}
                onChange={updateEmail}
                id="email"
                placeholder="Your Email"
                className="col-8 inputemail"
              />
              <br />
              <div className="terms">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isChecked}
                  onChange={updateBox}
                  className="checkbox"
                />

                <label className="ml-2">
                  I accept <a href="#">Terms of Use</a>
                </label>
              </div>

              <button type="submit" className="continue">
                Sign Up
              </button>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
}
export default Dialog;
