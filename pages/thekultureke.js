import React from "react";
import Image from "next/image";
import thekulturekepic from "../public/assets/projects/thekultureke.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function thekultureke() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src={thekulturekepic}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">thekultureke Website</h2>
          <p>React JS / Tailwind CSS </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p className="uppercase text-xltracking-widest text-[#5651e5] ">
            Project
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>
          <p>This is an event ticketing system for The Kulture Ke .</p>
          <button className="px-8 py-2  mt-4 mr-8">
            <a href="https://thekultureke.com" target="_blank" rel="noreferrer">
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://drive.google.com/file/d/1uAykHwH3UpPjA-D3FNyT7_5IDwLtEZvY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Video Demo
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

export default thekultureke;
