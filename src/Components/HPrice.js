import React from "react";
import { price } from "../dummydata";
import "./price.css";
import Headings from "./Headings";

function HPrice() {
  return (
    <>
      <section className="price padding">
        <Headings title="Pricing & Packages" subtitle="OUR PRICING" />

        <div className="container grid">
          {price.map((val) => (
            <div className="items shadow">
              <h4>{val.name}</h4>
              <h1>
                <span>$</span>
                {val.price}
              </h1>
              <p>{val.desc}</p>
              <button className="outline-btn">GET STARTED</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HPrice;
