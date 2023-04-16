import React from "react";
import Image from "next/image";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import nextjs from "../public/assets/skills/nextjs.png";
import ruby from "../public/assets/skills/ruby.png";
import rails from "../public/assets/skills/ruby-on-rails.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div id="skills" className="w-full  p-2 mt-2">
        <div className="max-w-[1240px] m-auto flex  flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
            Skills
          </p>
          <h2 className="py-4">What I can do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4  justify-center items-center">
                <div className="m-auto">
                  <Image src={html} alt="html" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4  justify-center items-center">
                <div className="m-auto">
                  <Image src={css} alt="html" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4  justify-center items-center">
                <div className="m-auto">
                  <Image src={javascript} alt="html" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4  justify-center items-center">
                <div className="m-auto">
                  <Image src={react} alt="html" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>REACT JS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4  justify-center items-center">
                <div className="m-auto">
                  <Image src={ruby} alt="html" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>RUBY</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4  justify-center items-center">
                <div className="m-auto">
                  <Image src={rails} alt="html" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>RUBY ON RAILS</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4  justify-center items-center">
                <div className="m-auto">
                  <Image src={nextjs} alt="html" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NEXT JS</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
              <div className="grid grid-cols-2 gap-4  justify-center items-center">
                <div className="m-auto">
                  <Image src={tailwind} alt="html" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TAILWIND CSS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
