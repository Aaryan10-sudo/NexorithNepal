import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-[40px]">
      <div className="mx-[20px] flex justify-between font-sora font-semibold text-[30px]  sm:flex-nowrap flex-wrap gap-[20px] sm:gap-0 pb-[20px] border border-transparent border-b-slate-500">
        <div className="w-[100%] sm:w-[400px]">
          <img src="/logo.png" className="sm:h-[50px] h-[30px]" />
          <p className="font-manrope font-normal text-[15px] my-[20px]">
            Nexorith, a pioneering IT company, is dedicated to shaping the
            future of learning through our comprehensive online courses. Whether
            you're looking to advance your career or develop new skills, our
            programs are designed to make you industry-ready and equipped for
            tomorrow’s challenges. Join us and be part of a community driving
            innovation and success.
          </p>
          <div className="flex gap-[50px] text-[20px]">
            <FaFacebookSquare />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <ul className="flex flex-col gap-[10px] mt-[5px]">
          <h1>Company</h1>
          <li className="font-manrope font-normal text-[15px]">About Us</li>
          <li className="font-manrope font-normal text-[15px]">Contact Us</li>
          <li className="font-manrope font-normal text-[15px]">Carrer</li>
        </ul>
        <ul className="mt-[5px] flex flex-col gap-[10px] ">
          <h1>Community</h1>
          <li className="font-manrope font-normal text-[15px]">
            Documentation
          </li>
          <li className="font-manrope font-normal text-[15px]">FaQ</li>
          <li className="font-manrope font-normal text-[15px]">Sitemap</li>
          <li className="font-manrope font-normal text-[15px]">Forum</li>
        </ul>
        <ul className="flex flex-col gap-[10px] mt-[5px]">
          <h1>Courses</h1>
          <li className="font-manrope font-normal text-[15px]">Web Design</li>
          <li className="font-manrope font-normal text-[15px]">
            Digital Marketing
          </li>
          <li className="font-manrope font-normal text-[15px]">
            Graphics Designing
          </li>
          <li className="font-manrope font-normal text-[15px]">
            Cyber Security
          </li>
          <li className="font-manrope font-normal text-[15px]">IOT</li>
        </ul>
        <ul className="flex flex-col gap-[10px] mt-[5px]">
          <h1>Contact</h1>
          <li className="font-manrope font-normal text-[15px]">
            Toll Free: +977 9749442103
          </li>
          <li className="font-manrope font-normal text-[15px]">
            Email: nexorith1@gmail.com
          </li>
          <li className="font-manrope font-normal text-[15px]">
            Sanepa-3, Lalitpur
          </li>
        </ul>
      </div>

      <p className="text-center font-manrope py-[20px]">
        © 2024 Nexorith. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
