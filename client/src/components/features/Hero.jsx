import React from "react";
import { FaCircle } from "react-icons/fa6";
import { TbNorthStar, TbTopologyStar3 } from "react-icons/tb";
import { MdMonitor, MdVerified } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between sm:flex-row flex-col sm:mx-[50px] mx-[10px]">
        <div className="sm:w-[50%]">
          <FaCircle className="absolute text-[30px] mt-[40px] sm:ml-[0px] ml-[10px] text-orange-500 hover:animate-bounce" />
          <TbTopologyStar3 className="text-green-500 text-[40px] absolute mt-[150px] ml-[340px] sm:ml-[500px] sm:mt-[100px] hover:animate-spin" />
          <h1 className="font-sora font-bold sm:text-[50px] text-[30px] text-center sm:text-start sm:mt-[150px] mt-[100px] relative">
            Limitless learning at your finger tips
          </h1>
          <p className="font-manrope text-[17px] mt-[20px] text-center sm:text-start font-medium">
            Online learning and teaching marketplace with 10+ courses & hands on
            internship. Taught by experts to help you acquire new skills.
          </p>
          <div className="flex sm:gap-[90px] gap-[30px] mt-[40px] sm:justify-normal justify-center flex-col sm:flex-row items-center">
            <button className=" bg-red-200 w-[150px] h-[50px] font-manrope text-red-600 font-bold rounded-xl">
              Get Started
            </button>
            <button className="font-manrope h-[50px] font-bold">
              Watch video
            </button>
            <TbNorthStar className="absolute mt-[165px] text-[50px] sm:text-[80px] sm:mt-[60px] sm:ml-[600px] text-yellow-600 hover:animate-ping" />
          </div>
        </div>
        <div className="test bg-[blue] sm:h-[500px] sm:w-[500px] h-[400px] w-[400px] sm:mt-[30px] mt-[60px] overflow-y-hidden">
          <div className="absolute w-[90px] h-[90px] shadow-2xl bg-[url('react-logo.jpg')] bg-cover bg-center mt-[-20px] rounded-md"></div>
          <img
            src="bulb.png"
            className="absolute h-[90px] mt-[130px] ml-[50px] sm:mt-[150px]"
          />
          <img src="icon.png" className="relative top-[20px] " />
          <div className="absolute bg-[white] shadow-xl w-[90px] h-[90px] mt-[-230px] sm:ml-[430px] ml-[320px] rounded-lg">
            <img src="figma.png" />
          </div>
        </div>
      </div>
      <div className="flex justify-between sm:mx-[50px] mx-[20px] mt-[30px] flex-wrap sm:gap-0 gap-[20px]">
        <div className="flex items-center p-[10px] gap-[30px] bg-slate-500 h-[100px] sm:w-[250px] w-[100%] rounded-lg">
          <MdMonitor className="text-[70px]" />
          <span className="flex flex-col">
            <h1 className="text-[30px] font-bold font-manrope">10+</h1>
            <p className="text-[15px] font-manrope">Online Courses</p>
          </span>
        </div>
        <div className="flex items-center p-[10px] gap-[30px] bg-green-300 h-[100px] sm:w-[250px] w-[100%] rounded-lg">
          <FaChalkboardTeacher className="text-[70px]" />
          <span className="flex flex-col">
            <h1 className="text-[30px] font-bold font-manrope">10+</h1>
            <p className="text-[15px] font-manrope">Expert Tutors</p>
          </span>
        </div>
        <div className="flex items-center p-[10px] gap-[30px] bg-purple-300 h-[100px] sm:w-[250px] w-[100%] rounded-lg">
          <PiStudentDuotone className="text-[70px]" />
          <span className="flex flex-col">
            <h1 className="text-[30px] font-bold font-manrope">100+</h1>
            <p className="text-[15px] font-manrope">Online Students</p>
          </span>
        </div>
        <div className="flex items-center p-[10px] gap-[30px] bg-blue-300 h-[100px] sm:w-[250px] w-[100%] rounded-lg">
          <MdVerified className="text-[70px]" />
          <span className="flex flex-col">
            <h1 className="text-[30px] font-bold font-manrope">100%</h1>
            <p className="text-[15px] font-manrope">Internship</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
