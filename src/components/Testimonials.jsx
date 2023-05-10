import React from "react";
import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* creating this self closing div for gradient effect  */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    {/* creating this below div for containing the heading and paragraph of the testimonial section */}
    <div
      className={`w-full flex justify-between items-center md:flex-row flex-col relative  sm:mb-16 mb-6 z-[1]`}
    >
      {/* heading of testimonial section */}
      <h1 className={`${styles.heading2}`}>
        What People are
        <br className="sm:block hidden" /> Saying About Us
      </h1>
      {/* creating this div for aligning the heading and para graph in two columns */}
      <div className="w-full md:mt-0 mt-6">
        {/* paragraph of testimonial section */}
        <p className={`${styles.paragraph} max-w-[470px] mt-6 text-left`}>
          Everything use need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    {/* creating this div to map through the feedback info i.e provide content for the feedback card  */}
    <div className="flex flex-wrap sm:justify-start justify-center relative z-[1] w-full ">
      {/* mapping through feedback info */}
      {feedback.map((card) => (
        // returning the feedback card for all the information of testimonial section
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
