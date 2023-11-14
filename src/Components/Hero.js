import React from "react";
import "./Hero.css";
import Headings from "./Headings";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Headings
              subtitle={"WELCOME TO ACADEMIA"}
              title={"Best Online Education Expertise"}
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="btn">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>

              <button>
                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </div>
  );
}

export default Hero;
