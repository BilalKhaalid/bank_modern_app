import React from "react";
import { apple, bill, google } from "../assets";
import { layout } from "../style";
import styles from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* creating a div for containing the image of the Billing section */}
    <div className={layout.sectionImgReverse}>
      {/* below is image */}
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* creating self closing divs for gradient effect on image */}
      <div className="absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    {/* creating a div for containing the heading and para for info section of billing */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className={`sm:block hidden`} /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, rerum
        hic. Itaque laborum, temporibus voluptatibus animi ex quas, voluptates
        est, explicabo aut doloribus quasi?
      </p>
      {/* creating the div below to have call to action buttons for app store and play store for downloading the app */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple app store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
