import React from "react";
import TeamCard from "../Components/TeamCard";
import Back from "../Components/Back";
import Awrapper from "../Components/Awrapper";
import "./Team.css";
import "../Components/About.css";
function Team() {
  return (
    <div>
      <Back title="Team" />
      <section className="team padding">
        <div className="container ">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </div>
  );
}

export default Team;
