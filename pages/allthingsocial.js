import React from "react";
import Image from "next/image";
import allthingsocialpic from "../public/assets/projects/allthingsocial.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function allthingsocial() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src={allthingsocialpic}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">Infuencer Management System</h2>
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
            This is an influencer management system that allows brands to get
            influencer , influencers to get brands and influencers to get paid
            for their work..
          </p>
          <div>
            <button className="md:px-8 px-2 py-2 mt-4">
              <a
                href="https://www.canva.com/design/DAFszUqAws0/2LE52CWWdEaDOtb46K0UzQ/edit?utm_content=DAFszUqAws0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noreferrer"
              >
                Video Demo
              </a>
            </button>
            <button className="md:px-8 px-2 py-2 ml-4 mt-4">
              <a
                href="https://github.com/MICHAELMUNAVU83/all_things_social"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
          </div>
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

export default allthingsocial;
