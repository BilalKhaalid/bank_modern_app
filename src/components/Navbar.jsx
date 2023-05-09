import { React, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center ">
      {/* Below image tag will show the logo of hooBank and in className there is a specific width and height for that logo */}
      <img src={logo} alt="hooBank" className={`w-[124px] h-[32px] cursor-pointer`} />
      {/* creating a un-ordered list for creating Navbar */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* mapping in from navLinks and giving a condition to provide margin-right on last nav element*/}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-white cursor-pointer font-normal text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* creating a div for mobile version menu of navbar. Initializing useState to dynamically change the navbar opening and closing icons */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          //! src does this if someone click on navbar icon then show menu else show the navbar default close icon
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => settoggle((prev) => !prev)}
        />
        {/* creating this div for containing all the navbar menu items */}
        <div
          className={`${
            //* this below condition refers to if someone hits the navbar icon then show this div in flex i.e. column otherwise make it hidden
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {/* these classes will show the ul in flex i.e column */}
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {/* again mapping items from navLinks but changing the margin-right to margin-bottom  */}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-white cursor-pointer font-normal text-[16px] ${
                  //! changing margin-right to margin-bottom of the last item of nav
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
