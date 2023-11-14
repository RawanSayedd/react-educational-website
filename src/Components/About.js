import React from "react";
import Headings from "./Headings";
import "./About.css";
import aboutimg from "../imgs/about.webp";
import { homeAbout } from "../dummydata";
import Awrapper from "./Awrapper";
function About() {
  return (
    <div>
      <section className="about-home">
        <div className="container flexSB">
          <div className="row left">
            <img src={aboutimg} alt="About" />
          </div>
          <div className="row right">
            <Headings
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </div>
  );
}

export default About;
