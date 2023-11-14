import React from "react";
import Back from "../Components/Back";
import BlogCard from "../Components/BlogCard";

function Blog() {
  return (
    <div>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <BlogCard />
      </section>
    </div>
  );
}

export default Blog;
