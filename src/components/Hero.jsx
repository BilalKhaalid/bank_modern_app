import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* creating a div for logo image of discount section and the content of discount section */}

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
      {/* this div contains the discount logo image and its content which is placed by tailwind classes */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        {/* Image contains discount logo */}
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />

        {/* In this paragraph tag it contains the content of discount section. we are using spans to and simple text in paragraph to differentiate the color by a variable. */}
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
