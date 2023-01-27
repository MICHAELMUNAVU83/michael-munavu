import React from "react";
import Image from "next/image";
import tonio from "../public/tonio.jpg";
const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xltracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-600">
            I am not a designer, but I design. I am not a developer, but I
            develop. I am not a writer, but I write.My name is Michael Munavu, a
          </p>
          <p className="py-2 text-gray-600">
            I am not a designer, but I design. I am not a developer, but I
            develop. I am not a writer, but I write.My name is Michael Munavu, a
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my recent projects below.
          </p>
        </div>
        <div className="flex justify-center mt-5 relative bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full w-80 h-80 m-auto hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-300">
          <Image
            src={tonio}
            alt="kimani"
            layout="fill"
            objectFit="cover"
            className="flex justify-center rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
