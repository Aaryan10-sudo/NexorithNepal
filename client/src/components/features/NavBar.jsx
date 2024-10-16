import React, { useState } from "react";
import { FaBars, FaMagnifyingGlass, FaUser } from "react-icons/fa6";

const NavBar = () => {
  let [menu, setMenu] = useState(false);

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
        <FaBars
          className="md:hidden transition-all ease-linear duration-500"
          onClick={() => {
            setMenu(!menu);
          }}
        />
        <FaUser />
        {menu === true ? (
          <div className="absolute bg-[white] h-[200px] w-[180px] mt-[250px] right-[0px] rounded-tl-lg rounded-bl-lg shadow-lg transition-all ease-linear duration-1000 transform translate-x-0">
            <ul className="text-center flex flex-col gap-[20px] mt-[20px] text-manrope cursor-pointer">
              <li>Home</li>
              <li>About Us</li>
              <li>Course</li>
              <li>Contact</li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
