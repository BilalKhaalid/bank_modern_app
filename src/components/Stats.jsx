import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6`}>
    {/* mapping through the stats object */}
    {stats.map((stat) => (
      //! giving key to the div for 1 to 3 id number of the item
      <div
        key={stat.id}
        className="flex flex-1 justify-start items-center flex-row m-3 "
      >
        <h4
          //! giving value of stat for providing value of stats object
          className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]  
      "
        >
          {stat.value}
        </h4>
        <p
          //! giving title of stat for providing title of stats object

          className="text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3 "
        >
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
