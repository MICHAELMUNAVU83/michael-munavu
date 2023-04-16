import React from "react";
import Image from "next/image";
import profile from "../public/profile.png";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full md:h-screen p-2 flex items-center "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-2">
          <p className="uppercase text-xltracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-600">
            I am a third year Telecommunications Engineering student at JKUAT
            who was first a{" "}
            <span className=" text-[#5651e5]">problem solver</span> and later
            became
            <span className=" text-[#5651e5]">
              {" "}
              a full stack software engineer
            </span>{" "}
            and <span className=" text-[#5651e5]">Technical Writer</span>
          </p>
          <p className="py-2 text-gray-600">
            I have experienced working in technology for the{" "}
            <span className=" text-[#5651e5]">past 3 years</span> and a graduant
            from <span className=" text-[#5651e5]">Microverse,</span> a remote
            International learning institution where I learned through pair
            programming and project building. We worked on many different
            technologies like{" "}
            <span className=" text-[#5651e5]">
              HTML, CSS, JS, React, Postgresql, Ruby on Rails,
            </span>{" "}
            and collaborated with developers across the globe . I have also
            completed a software development program at the{" "}
            <span className=" text-[#5651e5]">Moringa School</span> which is the
            top programming school in Kenya.
          </p>

          <p className="py-2 text-gray-600">
            I have been part of a team that won five{" "}
            <span className=" text-[#5651e5]">
              Hackathons in the past year and this year we won the{" "}
            </span>{" "}
            I was the lead backend engineer for both projects where we built a
            <span className=" text-[#5651e5]">
              system to help patients store and access their medical records
              efficiently
            </span>
          </p>
          <p className="py-2 text-gray-600">
            I noticed I love teaching and helping people learn new things. I{" "}
            <span className=" text-[#5651e5]">write technical articles</span> on
            React and Ruby on Rails mostly on{" "}
            <span className=" text-[#5651e5]">
              <a
                href="https://medium.com/@michaelmunavu83"
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </a>
            </span>
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">
              Check out some of my recent projects below.
            </Link>
          </p>
        </div>
        <div className="flex justify-center mt-5 relative bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full md:w-96 md:h-96 w-80 h-80 m-auto hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-600 cursor-pointer">
          <Image
            src={profile}
            alt="avatar"
            layout="fill"
            objectFit="cover"
            className="flex rotate-270 mx-auto justify-center rounded-full shadow-lg shadow-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
