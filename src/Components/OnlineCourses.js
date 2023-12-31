import React from "react";
import "./Course.css";
import { online } from "../dummydata";
import Headings from "./Headings";

function OnlineCourses() {
  return (
    <div>
      <section className="online">
        <div className="container">
          <Headings
            title="Browse Our Online Courses"
            subtitle="ONLINE COURSES"
          />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OnlineCourses;
