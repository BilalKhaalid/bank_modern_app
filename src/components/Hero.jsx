import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

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
          <span className="text-white"> 1 Month</span> Account
        </p>
      </div>
      {/* creating a new div for containing heading of the website and content of hero section */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        {/* below div is created for containing get started button as a react component */}
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      {/* the second half of heading content and paragraph of hero section */}
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    {/* creating a div for right side of our hero section i.e. robotic arm image and gradients */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* creating gradients for robot image which are given below */}
      <div className="absolute z-[0] w-[20%] h-[15%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    {/* adding button in mobile version */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
