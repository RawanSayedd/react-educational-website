import "./Testimonial.css";
import React from "react";
import Headings from "./Headings";
import { testimonal } from "../dummydata";

function Testimonial() {
  return (
    <div>
      <section className="testimonial padding">
        <div className="container">
          <Headings subtitle="TESTIMONIAL" title="Our Successful Students" />
          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
