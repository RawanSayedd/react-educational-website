import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import OnlineCourses from "../Components/OnlineCourses";
import HAbout from "../Components/HAbout";
import Testimonial from "../Components/Testimonial";
import HPrice from "../Components/HPrice";
import HBlog from "../Components/HBlog";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <HAbout />
      <OnlineCourses />
      <Testimonial />
      <HBlog />
      <HPrice />
    </div>
  );
}

export default Home;
