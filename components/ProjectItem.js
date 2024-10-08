import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, image, projectUrl, languages }) => {
  return (
    <div className="relative cursor-pointer hover:scale-105 mx-auto transition-all duration-500 flex items-center justify-center h-70 w-full shadow-xl shadow-gray-400 rounded-xl px-2 py-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#00b4db]/50 ease-in-out duration-500">
      <Image
        className="rounded-xl group-hover:opacity-10 "
        src={image}
        alt="project1"
        width={600}
        height={900}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
        <h3 className="md:text-2xl text-xl  text-white text-center tracking-wider">
          {title}
        </h3>
        <p className="py-2 text-white  text-center">{languages}</p>
        <Link href={projectUrl}>
          <p className="text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
