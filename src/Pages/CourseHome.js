import React from "react";
import Back from "../Components/Back";
import CoursesCard from "../Components/CoursesCard";
import OnlineCourses from "../Components/OnlineCourses";

function CourseHome() {
  return (
    <div>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
    </div>
  );
}

export default CourseHome;
