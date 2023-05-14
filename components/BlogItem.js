import React from "react";
import Image from "next/image";

const BlogItem = ({ title, image, blogUrl, description, topics }) => {
  return (
    <div className="max-w-sm rounded hover:scale-105 duration-500 transition-all cursor-pointer overflow-hidden md:mx-0 mx-auto w-[350px] md:w-[400px] h-[550px] md:h-[600px] shadow-lg z-10 shadow-gray-300">
      <Image
        className="rounded-xl object-cover group-hover:opacity-10 md:w-[400px] w-[350px] mx-auto h-[200px]  md:h-[250px] "
        src={image}
        alt="project1"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-md mb-2 uppercase text-[#5651e5]">
          {title}
        </div>
        <p className="text-gray-700 text-xs md:text-sm text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2">
          # {topics.split(",").join(" #")}
        </span>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  my-4 px-2 rounded">
          <a href={blogUrl} target="_blank" rel="noreferrer">
            Read More
          </a>
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
