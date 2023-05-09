import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

function GetStarted() {
  return (
    <div
      // ! creating a div for button and making it round and gradient which will look nice with our theme
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}
    >
      <div
        //! creating another div for inner area of the rounded button which will give it a very nice gradient border
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-full rounded-full`}
      >
        <div
          //! creating this div for containing the content of the button and icon of the arrow of get started
          className={`${styles.flexStart} flex-row`}
        >
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        {/* creating a paragraph tag to hold second part of the content of get started button */}
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
