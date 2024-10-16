import React from "react";
import { FaBars, FaMagnifyingGlass, FaUser } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="md:mx-[50px] mx-[10px] flex justify-between h-[50px] backdrop-blur-md sticky top-0 z-50 py-[10px]">
      <img src="logo.png" className="h-[30px]" />
      <ul className="sm:inline-flex gap-[50px] mt-[7px] font-manrope text-[13px] font-medium hidden transition-all ease-linear duration-200">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>COURSES</li>
        <li>CONTACT</li>
      </ul>
      <div className="flex gap-[25px] items-center">
        <form className="border-2 md:flex p-[5px] rounded-lg w-[150px] sm:w-[200px] hidden">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-[150px] sm:w-[200px]"
          />
          <button type="submit">
            <FaMagnifyingGlass />
          </button>
        </form>
        <FaBars className="md:hidden" />
        <FaUser />
      </div>
    </nav>
  );
};

export default NavBar;
