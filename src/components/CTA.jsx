import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-2xl box-shadow`}
    >
      {/* creating this below div to contain the heading and paragraph of the CTA section */}
      <div className={`flex-1 flex flex-col`}>
        {/* heading of CTA section */}
        <h2 className={`${styles.heading2} `}>Let's try our service Now!</h2>
        {/* paragraph of CTA section */}
        <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
          Everything use need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      {/* creating this div to use CTA section button */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
