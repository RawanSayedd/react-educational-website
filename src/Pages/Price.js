import React from "react";
import Back from "../Components/Back";
import PriceCard from "../Components/PriceCard";
import Faq from "../Components/Faq";

function Price() {
  return (
    <div>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <PriceCard />
      </section>
      <Faq />
    </div>
  );
}

export default Price;
