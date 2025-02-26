import React from "react";
import Image from "next/image";
import profile from "../public/profile123.png";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full my-8 md:my--0 h-full md:h-screen p-2 flex items-center "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-2">
          <p className="uppercase text-xltracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-600">
            I’m a software engineer and full-stack developer with experience in{" "}
            <span className=" text-[#5651e5]">Elixir, </span>{" "}
            <span className=" text-[#5651e5]">Phoenix LiveView,</span> and{" "}
            <span className=" text-[#5651e5]"> React JS. </span>
          </p>
          <p className="py-2 text-gray-600">
            I’ve worked at Uamuzi, Amaris Digital Solutions, GS1 Kenya, and
            Podii Consultants, building web solutions.
          </p>
          <p className="py-2 text-gray-600">
            I’ve also won 12 hackathons and startup competitions in{" "}
            <span className=" text-[#5651e5]">
              {" "}
              Kenya , Morocco , France , Belgium and Nigeria.{" "}
            </span>
          </p>
          <p className="py-2 text-gray-600">
            Currently, I’m at{" "}
            <a
              className=" text-[#5651e5] underline"
              href="https://africanmanagers.org/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              AMI
            </a>{" "}
            and run my own tech consultancy,{" "}
            <a
              className=" text-[#5651e5] underline"
              href="https://www.virgil.afrca/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Virgil Africa .
            </a>
          </p>
          <p>
            I enjoy teaching and write technical articles on Medium and creating
            tech content.
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
