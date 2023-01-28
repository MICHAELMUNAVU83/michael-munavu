import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Typewriter from "typewriter-effect";
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] mx-auto h-full flex p-2 justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            LET'S BUILD SOMETHING BEAUTIFUL
          </p>
          <h1 className="py-3 text-gray-700">
            Hi , I am <span className="text-[#5651e5]">Michael Munavu</span>
          </h1>
          <h2 className=" text-gray-700 text-center">I am a</h2>

          <h1 className="py-3 text-[#5651e5]">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "React Developer",
                  "Ruby on Rails Developer",
                  "Technical Writer",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a full-stack developer with 3 years of experience having been
            self-taught and learning from Microverse and Moringa Bootcamps both
            remotely.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer  hover:scale-110 ease-in   duration-300">
              <a
                href="https://www.linkedin.com/in/michael-munavu-0b0b1b1b9/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
              <a
                href="https://github.com/MICHAELMUNAVU83"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
              <a
                href="https://twitter.com/MichaelTrance1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
              <a rel="noopener noreferrer" href="tel:0740769596">
                <FiPhoneCall />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in   duration-300">
              <a
                href="https://wa.me/254740769596"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
