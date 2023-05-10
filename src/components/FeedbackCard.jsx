import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  // this below div contains all the content of the feedback card and the hover effect coming from index.css with class name of feedback-card
  <div className="flex justify-evenly flex-col px-10 py-12 rounded-[20px]  max-w-[340px] md:mr-10 sm:mr-5  my-5 feedback-card">
    {/* image tag containing image of quotes */}
    <img
      src={quotes}
      alt="double__quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    {/* paragraph containing the content for every feedback card */}
    <p
      className={`font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10`}
    >
      {content}
    </p>
    {/* creating this div for containing the image of the person who is giving th e feedback */}
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] mt-2 rounded-full" />
      {/* creating this div for containing the name,and description of the person who is giving th e feedback  */}
      <div className="flex flex-col ml-6">
        <h4 className="font-poppins font-semibold text-dimWhite text-[20px] leading-8 ">
          {name}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-6 ">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
