import React from "react";
import Image from "next/image";
import engagepropic from "../public/assets/projects/engagepro.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function engagepro() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image src={engagepropic} className="absolute z-1" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">EngagePro Employee Management System</h2>
          <p>Elixir / Phoenix Live View / Tailwind CSS</p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p className="uppercase text-xltracking-widest text-[#5651e5] ">
            Project
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>
          <p>
            EngagePro is an employee engagement app designed to improve
            communication, collaboration, and engagement in the workplace. The
            app provides a platform for employees to connect with each other,
            share ideas, provide feedback on various company initiatives and
            keep up on upcoming company events.
          </p>
          <button className="px-8 py-2  mt-4 mr-8">
            <a
              href="https://engage-pro.fly.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://drive.google.com/file/d/1M-xtb2oOIB2QyY7pqptYHgAf3Oz9Ev9a/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              Video Demo
            </a>
          </button>

          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/MICHAELMUNAVU83/employee_management_system"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center  font-semibold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="flex items-center text-gray-600 py-2 ">
                <RiRadioButtonFill className="pr-1" /> Elixir
              </p>
              <p className="flex items-center text-gray-600 py-2 ">
                <RiRadioButtonFill className="pr-1" /> Phoenix Live View
              </p>
              <p className="flex items-center text-gray-600 py-2 ">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back </p>
        </Link>
      </div>
    </div>
  );
}

export default engagepro;
