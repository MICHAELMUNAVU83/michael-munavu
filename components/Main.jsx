import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 2 }}
    >
      <div id="home" className="w-full pt-32 md:pt-0 h-screen text-center">
        <div className="max-w-[1240px] mx-auto h-full flex p-2 justify-center items-center">
          <div>
            <p className=" uppercase text-sm tracking-widest text-gray-600 ">
              LET'S BUILD SOMETHING BEAUTIFUL
            </p>
            <h1 className="py-3 text-gray-700">
              Hi , I am <span className="text-[#5651e5]">Michael Munavu</span>
            </h1>
            <h2 className=" text-gray-700 text-center">I am a</h2>

            <h1 className="py-3 fjalla-one md:text-3xl text-md text-[#5651e5]">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "React Js Developer",
                    "Phoenix Developer",
                    "Elixir Developer",
                    "Technical Writer",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </h1>
            <p className=" kulim-park py-4 text-gray-600 max-w-[85%] m-auto">
              I am a full-stack developer with 4 years of experience, trained at
              Microverse and Moringa. I specialize in building scalable web
              applications using Elixir , Phoenix and React JS. From startups to
              enterprise solutions, I’ve delivered projects that prioritize user
              experience and performance. I also create content around tech to
              help developers grow. Let’s create something impactful together.
            </p>
            <div className="flex items-center flex-wrap  justify-center md:w-[100%]  gap-2 m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer  hover:scale-110 ease-in   duration-300">
                <a
                  href="https://www.linkedin.com/in/michael-munavu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="md:text-2xl text-md " />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
                <a
                  href="https://github.com/MICHAELMUNAVU83"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="md:text-2xl text-md " />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
                <a
                  href="https://twitter.com/MichaelTrance1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="md:text-2xl text-md " />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
                <a rel="noopener noreferrer" href="tel:0740769596">
                  <FiPhoneCall className="md:text-2xl text-md " />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
                <a
                  href="https://wa.me/254740769596"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="md:text-2xl text-md " />
                </a>
              </div>

              <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4  cursor-pointer hover:scale-110 ease-in   duration-300">
                <a
                  href="https://www.tiktok.com/@michaelmunavu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok className="md:text-2xl text-md " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
