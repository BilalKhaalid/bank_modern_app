import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";

//! FeatureCard component
const FeatureCard = ({ icon, title, content, index }) => (
  //! main div starts here
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    {/* below div contains the image tag of icons of the features */}
    <div
      className={`w-[64px] h-[64px]  bg-dimBlue rounded-full mr-4 ${styles.flexCenter}`}
    >
      {/* icons of features */}
      <img src={icon} alt="icon" className=" w-[50%] h-[50%] object-contain" />
    </div>
    {/* below div contains the heading and content of the features */}
    <div className="flex-1 flex flex-col ml-3">
      <h2
        className={`text-[20px] text-white font-semibold leading-[26px] mb-1`}
      >
        {title}
      </h2>
      <p
        className={` ${styles.paragraph}  font-normal text-[16px] leading-[24px] mb-1`}
      >
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <div>
      {/* in the layout I have added classes so that it remains as simple as possible  */}
      <section className={layout.section} id="features">
        <div className={layout.sectionInfo}>
          {/* heading of the business section */}
          <h2 className={`${styles.heading2} `}>
            You do the business , <br className="sm:block hidden" /> we'll
            handle the money.
          </h2>
          {/* content para of business section */}
          <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and much more.
          </p>
          {/* rendering button of business section with dynamic props*/}
          <Button styles="mt-10" />
        </div>

        {/* starting working on features cards */}
        <div className={`${layout.sectionImg} flex-col`}>
          {/* mapping through the features object data */}
          {features.map((feature, index) => (
            //! creating a new FeatureCard component in this section
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Business;
