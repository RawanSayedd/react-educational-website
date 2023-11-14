import React from "react";
import "./Blog.css";
import { blog } from "../dummydata";

function BlogCard() {
  return (
    <div>
      <div className="container grid2">
        {blog.map((val) => {
          return (
            <div className="items shadow">
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <div className="admin flexSB">
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-comments"></i>
                    <label htmlFor="">{val.com}</label>
                  </span>
                </div>
                <h1>{val.title}</h1>
                <p>{val.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogCard;
