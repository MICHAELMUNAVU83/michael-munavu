import React from "react";
import Image from "next/image";
import profile from "../public/profile123.png";
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
            I am a student of Telecommunications Engineering at JKUAT. I
            initially focused on{" "}
            <span className=" text-[#5651e5]">problem-solving</span> before
            transitioning into a
            <span className=" text-[#5651e5]">
              {" "}
              a full stack software engineer
            </span>{" "}
            and <span className=" text-[#5651e5]">Technical Writer</span>
          </p>
          <p className="py-2 text-gray-600">
            Over the last <span className=" text-[#5651e5]">three years</span> I
            have gained considerable experience in the technology industry . I
            am a graduate of {""}
            <span className=" text-[#5651e5]">Microverse,</span> a remote
            International learning institution where I learned through pair
            programming and project building. We worked on many different
            technologies like{" "}
            <span className=" text-[#5651e5]">
              HTML, CSS, JS, React, Postgresql, Ruby on Rails,
            </span>{" "}
            and collaborated with developers across the globe . Additionally, I
            have completed a software development program at{" "}
            <span className=" text-[#5651e5]">Moringa School</span> which is the {" "}
            <span className=" text-[#5651e5]">top programming school</span> in
            Kenya.
          </p>

          <p className="py-2 text-gray-600">
            In the past year, I have been part of a team that won{" "}
            <span className=" text-[#5651e5]">
              2 Hackathons and 3 more start up competitions this year .
            </span>{" "}
            I was the lead backend engineer for both projects where we built a
            <span className=" text-[#5651e5]">
              system to help patients store and access their medical records
              more efficiently
            </span>
          </p>
          <p className="py-2 text-gray-600">
            Through my experiences, I discovered my passion for teaching and
            mentoring others. Currently, I write technical articles on{" "}
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
        <div className="flex justify-center mt-5 relative bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full md:w-96 md:h-96 w-80 h-80 m-auto hover:scale-105 ease-in duration-300 shadow-xl shadow-[#5651e5] cursor-pointer">
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
