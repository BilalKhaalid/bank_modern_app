import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}  flex-col`}>
    {/* creating this div to contain the main logo and the tag line  of the footer */}
    <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        {/* footer image */}
        <img
          src={logo}
          alt="hooBank"
          className="w-[266px] h-[72px] object-contain"
        />
        {/* tag line */}
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      {/* creating this div to map through the footerLinks to get the info displayed */}
      <div
        className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}
      >
        {/* mapping through footerLinks */}
        {footerLinks.map((footerLink) => (
          // creating this below div to return the links of the footer
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            {/* title of every footer section */}
            <h4 className={`font-poppins font-medium text-lg text-white`}>
              {footerLink.title}
            </h4>
            {/* creating a ul tag for containing every li item for every section of the footer title  */}
            <ul className="list-none mt-6">
              {/* mapping through the links of the footerLinks */}
              {footerLink.links.map((link, index) => (
                // creating li tag to display every list item of every section of the footer
                <li
                  className={`font-poppins font-normal text-xs leading-6 text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : " mb-0"
                  }`}
                  key={link.name}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    {/* creating this below div for containing the copyright section of the footer and logos of the social media */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      {/* tag line of copyright */}
      <p className={`font-poppins font-normal text-center text-lg text-white`}>
        2023 HooBank. All Right Reserved.
      </p>
      {/* creating this below div for containing social media icons and mapping through the socialMedia array */}
      <div className="flex flex-row md:mt-0 mt-6">
        {/* mapping through social media icons */}
        {socialMedia.map((social, index) => (
          // icons of the social media
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain
         cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
