import React from "react";
import "./Footer.css";
import { blog } from "../dummydata";

function Footer() {
  return (
    <div>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer className="container padding">
        <div className="box logo">
          <h1>ACADEMIA </h1>
          <span>Online Education & Learning</span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <i className="fab fa-facebook-f icon"></i>
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-twitter icon"></i>
        </div>
        <div className="box link">
          <h3>Explore</h3>
          <ul>
            <li>About Us</li>
            <li>Service</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="box link">
          <h3>Quick Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>Pricing</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Feedbacks</li>
          </ul>
        </div>
        <div className="box">
          <h3>Recent Posts</h3>
          {blog.slice(0, 3).map((val) => {
            return (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-comments"></i>
                    <label htmlFor="">{val.com}</label>
                  </span>
                  <h4>{val.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="box last">
          <h3>Have a Questions?</h3>
          <ul>
            <li>
              <i className="fa fa-map"></i>
              6th of October, Gizah, Egypt.
            </li>
            <li>
              <i className="fa fa-phone"></i>
              02-0112-863-4526
            </li>
            <li>
              <i className="fa fa-paper-plane"></i>
              example@email.com
            </li>
          </ul>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyrights @2023 All rights reserved | This template is made by{" "}
          <a href="https://github.com/RawanSayedd" target="_blank">
            Rawan Sayed Aly
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
