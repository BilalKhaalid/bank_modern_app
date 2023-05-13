import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => (
  <section className={layout.section}>
    {/* creating a div for containing heading and para for section info of cardDeal */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card<br className="sm:block hidden" /> deal  in a few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
      Looking for a better card deal? Our platform simplifies the process of finding the ideal credit card that suits your needs. With just a few easy steps, you can discover better card options with enhanced features, rewards, and competitive rates.
      </p>
      {/* adding button i.e. call to action */}
      <Button styles={`mt-10`} />
    </div>
    {/* creating a div for adding the image for cardDeal image section */}
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-full h-full" />
    </div>
  </section>
);

export default CardDeal;
