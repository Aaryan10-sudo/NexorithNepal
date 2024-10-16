import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

const Courses = () => {
  let [course, setCourse] = useState([]);
  const getAllCourse = async () => {
    try {
      let result = await axios({
        method: "GET",
        url: "https://nexorithnepal.onrender.com",
      });
      console.log(result);
      setCourse(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <main>
      <h1 className="text-center mt-[50px] font-sora font-extrabold text-[30px]">
        Our Offering Courses
      </h1>
      <div className="flex mx-[50px] sm:justify-between flex-wrap gap-[50px] sm:gap-0 mt-[20px] justify-center">
        {course.map((value, index) => {
          return (
            <div
              key={index}
              className="h-[450px] w-[270px] border-2 font-manrope"
            >
              <div className="h-[200px] bg-[url('banner.jpg')] bg-cover bg-center"></div>
              <span className="flex justify-between p-[10px]">
                <p className="h-[30px] w-[100px] text-center justify-center bg-green-400 flex items-center font-medium text-white">
                  {value.level}
                </p>
                <FaRegHeart className="mt-[5px]" />
              </span>
              <h1 className="p-[10px] font-sora font-bold h-[55px]">
                {value.courseName}
              </h1>
              <p className=" pb-[20px] mx-[10px]  border border-transparent border-b-slate-400">
                {value.courseDescription}
              </p>
              <span className="m-[10px] flex justify-between cursor-pointer">
                <p className="bg-blue-600 w-[80px] text-center text-white">
                  Rs. {value.price}
                </p>
                <p>{value.instructor}</p>
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-[full] sm:mx-[50px] mx-[10px] bg-blue-600 h-[170px] mt-[50px]">
        <p className="text-white font-manrope font-bold p-[20px] sm:text-[30px] text-[20px]">
          Get yourself industry-ready . . .
        </p>
        <p className="px-[20px] text-white font-manrope sm:text-[20px]">
          Our expert-led courses equip you with practical skills and up-to-date
          knowledge, helping you stay ahead in today’s competitive market. Join
          us and unlock your full potential!
        </p>
      </div>
    </main>
  );
};

export default Courses;
