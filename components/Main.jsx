import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] mx-auto h-full flex p-2 justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            LET'S BUILD SOMETHING BEAUTIFUL
          </p>
          <h1 className="py-3 text-gray-700">
            Hi , I'm <span className="text-[#5651e5]">Michael Munavu</span>
          </h1>
          <h1 className="py-3 text-gray-700">
            I am a full stack web developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a full-stack developer with 3 years of experience having been
            self-taught and learning from Microverse and Moringa Bootcamps both
            remotely.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer  hover:scale-110 ease-in   duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
              <FaTwitter />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
